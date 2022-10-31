const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  //关闭eslint
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        /*changeOrigin: true,
        ['/api']:'',*/
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/common/style/mixin.less")] //指定全局变量的less文件
    }
  },

}
