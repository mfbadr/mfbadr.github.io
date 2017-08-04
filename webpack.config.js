var path = require('path');
var webpack = require('webpack');

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
		loaders: [
			{
				test: /\.scss|css/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				include: __dirname + '/in'
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
};
