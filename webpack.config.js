// 1. 新建src并列处, webpack.config.js
//  填入自定义配置项，手动改下src下文件名字main.js
const path = require('path');
// 2、插件-自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 自动清除
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// mode模式
module.exports = {
  mode: 'development',
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 出口文件名
  },
  //   2、插件-自动生成html文件
  // yarn add html-webpack-plugin  -D
  // 引入自动生成 html 的插件,配置
  //   3、自定义打包的html模版，和输出文件名字
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
        filename: 'index.html',
      } // 生成文件的名称
    ),
    // 4、插件-自动清除dist目录内容
    // yarn add clean-webpack-plugin -D
    new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
    // 默认情况下dist
  ],
};
