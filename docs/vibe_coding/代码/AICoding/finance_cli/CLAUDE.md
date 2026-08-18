# 记账工具 (Finance CLI)

Python + Streamlit + SQLite3 单页记账 Web 应用。

## 项目结构

```
finance_cli/
├── app.py              # 主入口：页面标题、侧边栏筛选器、3 个 Tab 分发
├── config.py           # 常量：预设分类列表、数据库文件名
├── database.py         # 数据库层：建表、增删查、统计
├── tabs/
│   ├── __init__.py     # 空文件
│   ├── add_record.py   # Tab 1 — 添加账目表单
│   ├── list_records.py # Tab 2 — 账目列表 + 按 ID 删除
│   └── statistics.py   # Tab 3 — 柱状图 + 分类统计表
└── requirements.txt    # streamlit, pandas
```

## 技术栈

- **Python 3.x** + **Streamlit** (Web UI)
- **SQLite3** (数据库，Python 内置)
- **pandas** (表格展示，st.dataframe 依赖)

## 数据库

单表 `records`：

| 字段 | 类型 | 说明 |
|---|---|---|
| id | INTEGER PK AUTOINCREMENT | 唯一标识 |
| amount | REAL NOT NULL | 金额 |
| category | TEXT NOT NULL | 分类 |
| date | TEXT NOT NULL | 日期 YYYY-MM-DD |
| note | TEXT DEFAULT '' | 备注 |

预设分类：`餐饮, 交通, 购物, 娱乐, 居住, 其他`

数据库文件 `finance.db` 与 app.py 同级，首次运行自动创建。

## 模块职责与依赖

```
app.py ──→ tabs/*.py ──→ database.py ──→ config.py
  │                           │
  └──→ database.py ──────────┘
```

- **config.py** — 纯常量，无依赖
- **database.py** — 所有 SQL 操作封装为函数，不碰 Streamlit API
- **tabs/*.py** — 纯 UI 渲染，通过 database 函数取数据
- **app.py** — 初始化数据库、侧边栏筛选器、Tab 路由

## 运行方式

```bash
pip install -r requirements.txt
streamlit run app.py
```

## 页面布局

- **侧边栏**：月份下拉筛选（全部 / 1~12月）、分类下拉筛选（全部 / 6 类）
- **主区域 3 个 Tab**：
  1. 添加账目 — 表单（金额、分类、日期、备注）→ 写入 SQLite
  2. 账目列表 — st.dataframe 表格 + 按 ID 删除
  3. 分类统计 — st.bar_chart 柱状图 + 统计表（分类、笔数、总额、占比）
