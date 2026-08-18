import sqlite3
from config import DB_NAME, CATEGORIES


def get_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_connection()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            date TEXT NOT NULL,
            note TEXT DEFAULT ''
        )
    """)
    conn.commit()
    conn.close()


def add_record(amount, category, date, note):
    conn = get_connection()
    conn.execute(
        "INSERT INTO records (amount, category, date, note) VALUES (?, ?, ?, ?)",
        (amount, category, date, note),
    )
    conn.commit()
    conn.close()


def get_records(month=None, category=None):
    conn = get_connection()
    sql = "SELECT * FROM records WHERE 1=1"
    params = []

    if month:
        sql += " AND strftime('%m', date) = ?"
        params.append(f"{month:02d}")
    if category:
        sql += " AND category = ?"
        params.append(category)

    sql += " ORDER BY date DESC, id DESC"
    rows = conn.execute(sql, params).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def delete_record(record_id):
    conn = get_connection()
    conn.execute("DELETE FROM records WHERE id = ?", (record_id,))
    conn.commit()
    conn.close()


def get_stats(month=None):
    conn = get_connection()
    sql = "SELECT category, COUNT(*) as count, SUM(amount) as total FROM records WHERE 1=1"
    params = []

    if month:
        sql += " AND strftime('%m', date) = ?"
        params.append(f"{month:02d}")

    sql += " GROUP BY category ORDER BY total DESC"
    rows = conn.execute(sql, params).fetchall()
    conn.close()

    result = []
    total_all = sum(r["total"] for r in rows) or 1
    for r in rows:
        result.append({
            "category": r["category"],
            "count": r["count"],
            "total": r["total"],
            "percent": f"{r['total'] / total_all * 100:.1f}%",
        })
    return result
