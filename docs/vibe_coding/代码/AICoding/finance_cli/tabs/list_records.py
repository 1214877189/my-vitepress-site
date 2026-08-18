import streamlit as st
import pandas as pd
from database import get_records, delete_record


def render_list(month, category):
    st.subheader("账目列表")

    records = get_records(month=month, category=category)

    if not records:
        st.info("暂无记录")
        return

    df = pd.DataFrame(records)
    df.rename(columns={
        "id": "ID",
        "amount": "金额",
        "category": "分类",
        "date": "日期",
        "note": "备注",
    }, inplace=True)

    st.dataframe(df, use_container_width=True, hide_index=True)

    st.subheader("删除账目")
    delete_id = st.number_input("输入要删除的账目 ID", min_value=1, step=1)
    if st.button("删除"):
        records_by_id = {r["id"] for r in records}
        if delete_id in records_by_id:
            delete_record(delete_id)
            st.success(f"已删除账目 ID={delete_id}")
            st.rerun()
        else:
            st.warning(f"未在当前列表中找到 ID={delete_id}")
