module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asset': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}