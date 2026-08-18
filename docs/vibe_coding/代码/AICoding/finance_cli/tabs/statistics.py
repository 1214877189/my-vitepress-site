import streamlit as st
import pandas as pd
from database import get_stats
from config import CATEGORIES


def render_stats(month):
    st.subheader("分类统计")

    stats = get_stats(month=month)

    if not stats:
        st.info("暂无数据")
        return

    df = pd.DataFrame(stats)
    df.rename(columns={
        "category": "分类",
        "count": "笔数",
        "total": "总额",
        "percent": "占比",
    }, inplace=True)

    chart_data = df.set_index("分类")[["总额"]]
    st.bar_chart(chart_data, use_container_width=True)

    st.dataframe(df, use_container_width=True, hide_index=True)
