module.exports = {
  plugins: [
    {
      resolve: '@cnfe/gatsby-theme-cone',
      options: {},
    },
  ],
  siteMetadata: {
    title: 'Cone',
    description: 'Gatsby starter of cone theme',
    siteUrl: 'http://gitlab.alibaba-inc.com/coll/gatsby-starter-theme-cone',
    githubUrl: 'http://gitlab.alibaba-inc.com/coll/gatsby-starter-theme-cone',
    navs: [
      {
        slug: 'docs/specification/started',
        title: {
          zh: '设计语言',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
        },
      },
    ],
    docs: [
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
        },
        order: 4,
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
        },
        order: 2,
      },
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
        },
      },
    ],
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showAntVProductsCard: false, // 是否展示 AntV 系列产品的卡片链接
    showLanguageSwitcher: false, // 用于定义是否展示语言切换
    showGithubCorner: false, // 是否展示角落的 GitHub 图标
    playground: {
      container: '<div id="container" />',
    },
    redirects: [],
  },
};
