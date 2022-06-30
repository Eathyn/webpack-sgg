const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const os = require('os')

const threads = os.cpus().length

module.exports = {
	// 单入口
	entry: './src/main.js',

	// 多入口
	// entry: {
	// 	main: './src/main.js',
	// 	app: './src/app.js',
	// 	utils: './src/utils.js',
	// },

	output: {
		// filename: 'static/js/main.js', // 单入口
		// filename: 'static/js/[name].js', // 多入口
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},

	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.css$/,
						use: [
							MiniCssExtractPlugin.loader,
							'css-loader',
							{
								loader: 'postcss-loader',
								options: {
									postcssOptions: {
										plugins: [['postcss-preset-env']],
									},
								},
							},
						],
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
					{
						test: /\.(ttf|woff|woff2|mp4|mp3|avi)$/,
						type: 'asset/resource',
						generator: {
							filename: 'static/media/[hash:8][ext][query]',
						},
					},
					{
						test: /\.m?js$/,
						exclude: /node_modules/, // 排除 node_modules
						use: [
							{
								loader: 'thread-loader',
								options: {
									workers: threads,
								},
							},
							{
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env'],
									cacheDirectory: true, // 开启 babel 缓存
									cacheCompression: false, // 缓存文件不要压缩
									plugins: ['@babel/plugin-transform-runtime'], // 减少代码体积
								},
							},
						],
					},
				],
			},
		],
	},

	plugins: [
		new ESLintWebpackPlugin({
			context: path.resolve(__dirname, '../src'),
			exclude: 'node_modules', // 排除 node_modules
			cache: true,
			cacheLocation: path.resolve(
				__dirname,
				'../node_modules/.cache/.eslintcache',
			),
			threads,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/main.css',
		}),
	],

	optimization: {
		// minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				parallel: threads,
			}),
		],
		splitChunks: {
			chunks: 'all', // 对所有模块都进行分割
		},
	},

	mode: 'production',

	devtool: 'source-map',
}
