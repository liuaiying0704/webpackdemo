const path = require('path');
// 1. 新建src并列处, webpack.config.js
// 2. 填入自定义配置项，手动改下src下文件名字main.js
module.exports = {
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 出口文件名
  },
};
