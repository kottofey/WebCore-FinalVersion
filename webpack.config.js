const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		index: ['@babel/polyfill', './scripts/index.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(html?)$/i,
				use: 'html-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		port: 4200,
	},
};
