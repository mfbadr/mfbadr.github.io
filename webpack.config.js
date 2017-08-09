var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		'bundle': "./in/js/index.js",
	},
	output: {
		path: path.resolve(__dirname, 'out'),
		publicPath: 'out/',
		// publicPath: path.resolve(__dirname),
		filename: "[name].js"
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	devServer: {
		contentBase: path.join(__dirname),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				}),
				// loaders: ['style-loader', 'css-loader', 'sass-loader'],
				include: __dirname + '/in'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000'
			}
		]
	},
	  plugins: [
    new ExtractTextPlugin('style.css')
    //if you want to pass in options, you can do so: 
    //new ExtractTextPlugin({ 
    //  filename: 'style.css' 
    //}) 
  ]
}
