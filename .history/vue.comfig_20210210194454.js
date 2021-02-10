module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue : 16, // 换算的基数
            selectorBlackList  : [], // 忽略转换正则匹配项
            propList   : ['*'],
          }),
        ]
      }
    }
  }
}
