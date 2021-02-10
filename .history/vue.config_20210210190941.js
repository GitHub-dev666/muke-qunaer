module.exports = {
    css: {
       loaderOptions: {
             postcss: {
               plugins: [
                    // 把px单位换算成rem单位
                 require("postcss-pxtorem")({
                       rootValue: 75, // 换算的基数(设计图750的根字体为32)
                       selectorBlackList: [".van"],// 要忽略的选择器并保留为px。
                       propList: ["*"], //可以从px更改为rem的属性。
                       minPixelValue: 2 // 设置要替换的最小像素值。
                   })
               ]
             }
        }
   }
}