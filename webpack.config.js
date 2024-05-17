const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		index: ['@babel/polyfill', './scripts/index.js'],
	},
	output: {
		filename: './scripts/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devtool: 'source-map',
	plugins: [
		new htmlWebpackPlugin({
			template: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/style.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				include: path.resolve(__dirname, 'src/scripts'),
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
			{
				test: /\.(scss|sass|css)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(html?)$/i,
				use: 'html-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name]-[contenthash][ext]',
				},
			},
			{
				test: /\.(woff|ttf|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name]-[contenthash][ext]',
				},
			},
		],
	},
	devServer: {
		port: 4200,
	},
};
