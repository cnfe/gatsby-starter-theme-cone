module.exports = {
  assetPrefix: '//assets-daily.cainiao-inc.com', // 注意线上去除 daily
  plugins: [
    {
      resolve: 'gatsby-theme-cone',
      options: {
        pathPrefix: '/group/repository' // 对应端坊的group和关联应用，上线后的域名 xx.xx.com/{group}/{repository}
      },
    },
  ],
  siteMetadata: {
    title: 'N2',
    description: 'Gatsby starter of cone theme',
    siteUrl: 'https://github.com/cnfe/gatsby-starter-theme-cone',
    githubUrl: 'https://github.com/cnfe/gatsby-starter-theme-cone',
    logoUrl:
    'https://img.alicdn.com/tfs/TB1GruToxn1gK0jSZKPXXXvUXXa-500-121.png',
    navs: [
      {
        slug: 'docs/specification/started',
        title: {
          zh: '设计语言',
          en: 'Specification'
        }
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples'
        }
      },
      {
        slug: 'independent',
        title: {
          zh: '独立',
          en: 'MyApp'
        }
        // target: '_blank',
      }
    ],
    docs: [
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1'
        },
        order: 4
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level'
        },
        order: 2
      }
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
          en: 'Category'
        }
      }
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
