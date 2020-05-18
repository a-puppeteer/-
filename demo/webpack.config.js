
const htmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new htmlWebpackPlugin({
  template:'./src/index.html',
  filename:'index.html'
})
module.exports = {
  mode:'development',
  plugins:[htmlPlugin],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','postcss-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','postcss-loader','sass-loader']},
      {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,use:['url-loader?limit=16940']},
    ]
  }
}