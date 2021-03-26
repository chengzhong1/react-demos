//webpack配置文件,当运行webpack指令时,会加载里面的配置
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
//用来拼接绝对路径的方法
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge.merge(baseConfig, {


  devServer: {
    contentBase: './build',
    inline: true,
  },

}
)