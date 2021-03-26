
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
//用来拼接绝对路径的方法
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge.merge(baseConfig, {

  plugins: [

    new UglifyjsWebpackPlugin()
  ],

})