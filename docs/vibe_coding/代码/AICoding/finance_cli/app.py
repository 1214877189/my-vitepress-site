import streamlit as st
from database import init_db
from config import CATEGORIES
from tabs.add_record import render_add_form
from tabs.list_records import render_list
from tabs.statistics import render_stats

st.set_page_config(page_title="记账工具", page_icon="💰", layout="wide")
st.title("📒 记账工具")

init_db()

with st.sidebar:
    st.header("筛选")
    month_options = ["全部"] + list(range(1, 13))
    month_label = st.selectbox("月份", month_options, format_func=lambda m: f"{m}月" if m != "全部" else "全部")
    category_options = ["全部"] + CATEGORIES
    category_label = st.selectbox("分类", category_options)

month = month_label if month_label != "全部" else None
category = category_label if category_label != "全部" else None

tab1, tab2, tab3 = st.tabs(["添加账目", "账目列表", "分类统计"])

with tab1:
    render_add_form()

with tab2:
    render_list(month, category)

with tab3:
    render_stats(month)
