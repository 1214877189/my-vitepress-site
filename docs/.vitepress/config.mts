import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { langchainSidebar, langgraphSidebar, vibeSidebar, pythonSidebar } from './sidebars'

const site = 'https://sugar.github.io'
const homeUrl = site + '/sugar-house/'



// https://vitepress.dev/reference/site-config
// 直接使用 defineConfig 即可获得完整的类型提示
export default defineConfig({
  // 网站的基础配置
  title: "sugar_house",
  description: "热爱编程",
  lang: 'zh-CN',
  base: '/sugar-house/',
  
  srcDir: '.',
  srcExclude: ['**/代码/**', '**/code/**', '**/.venv/**', '**/node_modules/**', '**/langgraph-runtime-viz/**'],
  
  ignoreDeadLinks: [/代码|%E4%BB%A3%E7%A0%81/, /langgraph-runtime-viz/],

  cleanUrls: true,

   // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	// 顶部导航栏
	logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Python',
        items: [
          { text: '课件目录', link: '/python/课件/01-必备基础知识' },
          { text: '视频分 P', link: '/python/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1tDsgzxECr' },
        ],
      },
      {
        text: 'LangChain',
        items: [
          { text: '课件目录', link: '/langchain/课件/01-LangChain概述' },
          { text: 'Notebook', link: '/langchain/notebooks' },
          { text: '视频分 P', link: '/langchain/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1rv7A6oEeP' },
        ],
      },
      {
        text: 'LangGraph',
        items: [
          { text: '课件目录', link: '/langgraph/课件/00-环境配置' },
          { text: 'Notebook', link: '/langgraph/notebooks' },
          { text: '视频分 P', link: '/langgraph/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1z3NY66EY1' },
        ],
      },
      {
        text: 'AI Coding',
        items: [
          { text: '课件目录', link: '/vibe_coding/课件/00-课程介绍与环境准备' },
          { text: '视频分 P', link: '/vibe_coding/README' },
          { text: 'B 站视频', link: 'https://www.bilibili.com/video/BV1RPET6tEp2' },
        ],
      },
    ],
	
	sidebar: {
      '/python/': pythonSidebar,
      '/langchain/': langchainSidebar,
      '/langgraph/': langgraphSidebar,
      '/vibe_coding/': vibeSidebar,
	},

	// 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
	
	search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索课件',
            buttonAriaLabel: '搜索课件',
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
	
	outline: {
      label: '本页目录',
      level: [2, 3],
    },
	
	// 开启页面底部的“上一页/下一页”
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

	lastUpdated: {
      text: '最后更新',
    },
	
	returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    footer: {
      message: '课程版权归尚硅谷所有，本站仅供学习交流',
      copyright: 'Copyright © 尚硅谷 · 笔记整理',
    },
  },
  
  markdown: {
    // 课件中大量出现 <class '...'>、<YOUR_API_KEY>、<h1> 等文本，
    // 关闭原始 HTML 解析，避免被 Vue 当成未闭合标签导致构建失败
    html: false,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  vite: {
    define: {
      __COMMIT_SHA__: JSON.stringify((process.env.GITHUB_SHA || 'dev').slice(0, 7)),
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
  },
})

