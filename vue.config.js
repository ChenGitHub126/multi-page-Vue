const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 项目在服务器的根目录
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/multi-page-Vue/dist'
    : '/',
  // 打包目录
  outputDir: 'dist',
  // 打包后静态资源存放目录，默认为""
  assetsDir: 'static',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'));
  },
  // devServer: {
  //   proxy: {
  //     // '/api': {
  //     //   target: '<url>',
  //     //   ws: true,
  //     //   changeOrigin: true,
  //     //   pathRewrite: {
  //     //     '^/api': ''
  //     //   }
  //     // },
  //   },
  // },
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
    other: {
      entry: 'src/pages/other/main.js',
      template: 'public/index.html',
      filename: 'other.html',
    },
  },
};
