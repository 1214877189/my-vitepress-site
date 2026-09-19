---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "sugar_house"
  text: "热爱编程 · 记录成长"
  tagline: 每天进步一点点，从零基础到 AI 应用开发
  actions:
    # --- 第一组：核心教程入口 ---
    - theme: brand
      text: 💻 Deep Agents
      link: /tutorial/Deep Agents/课件/deepagents_笔记
    #- theme: brand
    #  text: 🤖 LangChain & Graph
    #  link: /langchain/课件/01-LangChain概述
    
    # --- 第二组：实战与新趋势 ---
    - theme: alt
      text: 🚀 项目实战：掌柜问数
      link: /project/掌柜问数/课件/掌柜问数
    - theme: alt
      text: 🚀 项目实战：电商小二
      link: /project/电商小二/课件/00-使用uv管理项目
    - theme: alt
      text: 🚀 项目实战：智能客服
      link: /project/智能客服/课件/01_对话系统与智能对话架构

features:
  # ==========================
  # 第一部分：系统教程 (Learning Path)
  # ==========================
  #- title: 📚 Python 零基础入门
  #  details: 涵盖语法、流程控制、函数、OOP、异常处理及并发编程。适合完全零基础，夯实编程地基。
  #  link: /python/课件/01-必备基础知识
  #  linkText: 开始学习 ->

  #- title: 🧠 LangChain 1.2 全栈
  #  details: 深入模型调用、Tools、Agent、中间件、记忆模块与 RAG 实战。配套完整课件与 Notebook 代码。
  #  link: /langchain/课件/01-LangChain概述
  #  linkText: 开始学习 ->

  #- title: 🕸️ LangGraph 图编排
  #  details: 掌握状态图、控制流、持久化、HITL 人机交互、工具节点及流式输出，构建复杂 Agent 工作流。
  #  link: /langgraph/课件/00-环境配置
  #  linkText: 开始学习 ->

  #- title: 💻 AI Coding (Vibe Coding)
  #  details: 基于 Claude Code 深度实践，学习如何用自然语言指挥 AI 构建真实项目，覆盖 Skills 与 Codex。
  #  link: /vibe_coding/课件/00-课程介绍与环境准备
  #  linkText: 开始学习 ->

  # ==========================
  # 第二部分：项目实战 (Project Practice)
  # 建议在视觉上通过 Emoji 或标题与前文区分
  # ==========================
  - title: 🚀 实战项目：掌柜问数
    details: 【综合实战】基于大模型的智能数据分析助手。整合前述知识点，完成从需求分析到部署上线的全流程。
    link: /project/掌柜问数/课件/尚硅谷大模型项目之掌柜问数
    linkText: 查看项目 ->
    
  # 可选：如果你有更多项目，可以继续在这里添加
  # - title: 🚀 实战项目：XXX
  #   details: ...
---

