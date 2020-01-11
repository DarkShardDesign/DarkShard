const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

const workboxPlugin = require('workbox-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const package = require('./package.json');

const clientConfig = {
	mode: 'development',
	target: 'web',

	entry: {
		"js/main": [
			'./src/app/main.js',
			'./src/app/assets/styles/main.scss'
		],
		"js/vendor": './src/vendor.js'
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new workboxPlugin.GenerateSW({
			swDest: 'sw.js',
			clientsClaim: true,
			skipWaiting: false
		}),
		new HtmlWebpackPlugin({
			title: package.product.title,
			filename: 'index.html',
			template: 'src/app/assets/index.hbs',
			inject: false
		})
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader'
			},
			{
				test: /.(template.html)$/,
				use: 'raw-loader'
			},
			{
				test: /.(scss|css)$/,

				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/styles.css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	optimization: {
		minimizer: [new TerserPlugin()],

		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};

const serverConfig = {
	target: 'node',
	entry: {
		"server": "./src/server/server.js"
	},
}

module.exports = [ serverConfig, clientConfig ];