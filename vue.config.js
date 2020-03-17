const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  devServer: {
    port: '8080',
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/auth':{
        target: 'http://localhost:8089',
        changeOrigin: true
      },
      // '/api':{
      //   target: 'http://localhost:8089',
      //   changeOrigin: true
      // }
    }
  },
  productionSourceMap: false,
  lintOnSave: false,
  
};