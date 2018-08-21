const path = require('path');
const vuxLoader = require('vux-loader');

function resolve(dir) {
  return path.join(__dirname, dir);
}

console.log('');
console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------');
console.log();
console.log('本地启动或构建的文件信息 | 结束--------------------------------------------------------------');
console.log('');

const baseUrl = process.env.NODE_ENV === 'production' ? '/multi-page-Vue/dist/' : '/';

module.exports = {
  // 项目在服务器的根目录
  baseUrl,

  // 打包目录
  outputDir: undefined,

  // 打包后静态资源存放目录，默认为"static"
  assetsDir: 'static',

  lintOnSave: true,

  configureWebpack: (config) => {
    vuxLoader.merge(config, {
      plugins: [
        'vux-ui',
        {
          name: 'duplicate-style',
          options: {
            cssProcessorOptions : {
              safe: true,
              zindex: false,
              autoprefixer: {
                add: true,
                browsers: [
                  'iOS >= 7',
                  'Android >= 4.1'
                ]
              }
            }
          }
        },
	      {
		      name: 'less-theme',
		      path: 'src/common/styles/theme.less' // 相对项目根目录路径
	      },
      ],
    });
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_assets', resolve('src/assets'));
  },

  css: {
    extract: true,
	  sourceMap: false
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
    other: 'src/pages/other/main.js',
    // other: {
    //   entry: 'src/pages/other/main.js',
    //   template: 'public/index.html',
    //   filename: 'other.html',
    // },
  },

  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
};
