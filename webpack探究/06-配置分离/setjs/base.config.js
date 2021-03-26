//webpack配置文件,当运行webpack指令时,会加载里面的配置
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
//用来拼接绝对路径的方法
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, '../build')
  },
  // loader的配置
  module: {
    rules: [
      {
        //
        test: /\.css$/,
        use: [
          //use执行顺序,
          'style-loader',//创建style标签,将js中的样式资源插入进来,添加到head中生效
          'css-loader'//将css文件变成commonjs模块加载js中,里面内容是字符串
        ],

      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归pinkman所有'),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  // devServer: {
  //   contentBase: './build',
  //   inline: true,
  // },
  // mode: 'development',//development
  // //production
}