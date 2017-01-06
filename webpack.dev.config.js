"use strict";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
	    path: path.join(__dirname, 'build/'),
	    filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'	
			},
			{
				test: /\.css$/, exclude: /\.useable\.css$/,
				loader: "style-loader!css-loader" 
			},
			{
				test: /\.useable\.css$/,
				loader: "style-loader/useable!css-loader" 
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "file"
			},
			{
				test: /\.(woff|woff2)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.gif/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Hot reload on the go
	    new webpack.NoErrorsPlugin()
	]
	
}