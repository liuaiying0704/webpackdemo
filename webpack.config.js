// 1. 新建src并列处, webpack.config.js
//  填入自定义配置项，手动改下src下文件名字main.js
const path = require('path');
// 2、插件-自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 自动清除
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// mode模式
// webpack-dev-server服务器  yarn add webpack-dev-server -D

// css    yarn add style-loader css-loader -D
// 重复

//less    yarn add less less-loader -D
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
  //   在webpack.config.js中添加服务器配置
  devServer: {
    // port: 3000, // 端口号
    open: true,
  },
  //   加载器 - 处理css文件问题  yarn add style-loader css-loader -D
  // ...其他代码
  module: {
    // loader 加载器 配置在这儿
    rules: [
      // loader的规则

      // 加载器 - 处理css文件问题
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },

      // 处理less，loader的规则
      {
        test: /\.less$/, // 匹配执行类型的文件
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        // 执行的顺序 less-loader css-loader style-loader
        // less-loader 先把less代码转换成css
        // css-loader 再把css代码转换成webpack 可以识别的js代码
        // style-loader 在把css代码插入到 dom中
        use: ['style-loader', 'css-loader', 'less-loader'],
      },

      // 加载器 - 图片问题   yarn add url-loader file-loader -D
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
            // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
            options: {
              limit: 8 * 1024,
            },
          },
        ],
      },
      // // wepack 5语法
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        // type: 'asset/inline',
        // // 直接转换成base64
        // type: 'asset/resource',
        // // 复制到dist目录下
        type: 'asset',
        parser: {
          //解析器
          dataUrlCondition: {
            // maxSize: 30 * 1024,
            maxSize: 8 * 1024,
          },
        },
        // 小于8kb，转based64打包在js下
        // 大于8Kb,直接复制到dist文件下。
        // 可修改文件名
        generator: {
          //生成器
          // filename: 'font-[name].[hash:6][ext]',   ext扩展名
          filename: '[hash:6][ext]',
          //资源文件处理后， zi'yuan'guan'li'qi输出的文件名
        },
      },
    ],
  },
};
