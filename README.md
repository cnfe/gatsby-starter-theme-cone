Gatsby主题包

#### 端坊发布
* `gatsby new mysite https://github.com/cnfe/gatsby-starter-theme-cone`
* 拉迭代分支，拷贝 mysite 下的文件到迭代分支中，注意隐藏文件也要拷贝，不需要拷贝node_modules
* 执行`npm install`
* 修改`gatsby-config.js`中的 `assetPrefix` 和 `pathPrefix`
* 执行`npm run start`进行开发，开发过程中可以移除掉package.json中不需要的依赖
* 执行`npm run build`构建静态页面
* 提交代码进行端坊部署

#### 注意事项
* 修改`gatsby-config.js`，需要重启start才能运行，否则会报错
* 如果需要提交build目录，清移除`.gitignore`中的build