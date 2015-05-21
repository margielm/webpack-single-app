var webpack = require("webpack");

module.exports = {
	entry: {
		app: ['entry.js'],
		vendor: ['jquery/dist/jquery', 'routerjs']
	},
	output: {
		publicPath: 'dist/',
		path: __dirname + "/dist",
		filename: '[name].chunk.js'
	},
	resolve: {

		modulesDirectories: ['./src/', 'node_modules'],
		extensions: ['', '.webpack.js', '.web.js', '.js']
	},
	plugins: [
			new webpack.ProvidePlugin({
				'$' : 'jquery/dist/jquery'
			}),
			new webpack.optimize.CommonsChunkPlugin({name:"vendor", minChunks: Infinity})
	]
};