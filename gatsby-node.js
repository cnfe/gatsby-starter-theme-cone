const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const siteConfig = require('./config.json');

exports.onCreateWebpackConfig = ({ stage, getConfig }) => {
  const config = getConfig();

  if (stage.startsWith('build')) {
    if (stage === 'build-javascript') {
      config.output.filename = '[name].js';
      config.output.chunkFilename = '[name].js';
    }

    for (let i = 0, len = config.plugins.length; i < len; i++) {
      const plugin = config.plugins[i];
      if (plugin instanceof MiniCssExtractPlugin) {
        config.plugins.splice(i, 1);
        break;
      }
    }

    // 添加规则
    config.module.rules.unshift({
      test: /\.js?$/,
      use: {
        loader: 'string-replace-loader',
        options: {
          search: /\/page-data\//g,
          replace: `/${siteConfig.deploy.version}/page-data/`
        }
      }
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
        ignoreOrder: false,
        moduleFilename: () => this.options.filename || DEFAULT_FILENAME
      })
    );
  }
};
