const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, // 小于 30kb 的图片会被 base64 处理
          },
        },
        generator: {
          filename: 'static/images/[hash:8][ext][query]',
        },
      },
    ],
  },
  plugins: [],
  mode: 'development',
}
