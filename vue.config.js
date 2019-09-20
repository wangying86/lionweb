// module.exports = {
//     outputDir: 'dist', //build输出目录
//     assetsDir: 'assets', //静态资源目录（js, css, img）
//     lintOnSave: false, //是否开启eslint
//     devServer: {
//         open: true, //是否自动弹出浏览器页面
//         host: "localhost",
//         port: '8081',
//         https: false, //是否使用https协议
//         hotOnly: false, //是否开启热更新
//         proxy: {
//             '/shuangmeimelody': {
//                 target: 'http://elearning.shuangmeimelody.com/web/phoneweb_student/ashx/', //API服务器的地址
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/shuangmeimelody': ''
//                 }
//             }
//         }
//     }
// }
// 
 module.exports = {
 publicPath: process.env.NODE_ENV === "production" ? "/lion" : "/" //为了发布到github
};