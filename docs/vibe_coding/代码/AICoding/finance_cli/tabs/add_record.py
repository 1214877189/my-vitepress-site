import streamlit as st
from datetime import date
from database import add_record
from config import CATEGORIES


def render_add_form():
    st.subheader("添加账目")

    with st.form("add_form", clear_on_submit=True):
        amount = st.number_input("金额", min_value=0.0, step=0.01, format="%.2f")
        category = st.selectbox("分类", CATEGORIES)
        record_date = st.date_input("日期", value=date.today())
        note = st.text_input("备注", placeholder="可选")

        submitted = st.form_submit_button("添加")
        if submitted:
            if amount <= 0:
                st.error("金额必须大于 0")
            else:
                add_record(amount, category, record_date.isoformat(), note)
                st.success(f"已添加：{category} ¥{amount:.2f}")
                st.rerun()
