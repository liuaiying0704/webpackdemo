// 1. 新建src并列处, webpack.config.js
//  填入自定义配置项，手动改下src下文件名字main.js
const path = require('path');
// 2、插件-自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 出口文件名
  },
  //   2、插件-自动生成html文件
  // yarn add html-webpack-plugin  -D
  // 引入自动生成 html 的插件,配置
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
        filename: 'index.html',
      } // 生成文件的名称
    ),
  ],
  //   3、自定义打包的html模版，和输出文件名字
};
