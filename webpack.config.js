const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

let loaders = [
// 	{
// 	enforce: 'pre',
// 	test: /\.jsx$/,
// 	exclude: /node_modules/,
// 	loader: 'eslint-loader'
// },
	{
		test: /\.(jsx|js)$/,
		exclude: /(node_modules|public\/)/,
		loader: "babel-loader"
	}];

const server = {
	name: 'server',
	entry: {
		'main-server': [path.resolve(__dirname, 'src/server.js')],
		'vendor': ['aspnet-prerendering', 'react-dom/server']
	},
	resolve: {
		mainFields: ['main'],
		extensions: ['.js', '.jsx'],
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		// publicPath: '/dist/',
		libraryTarget: 'commonjs2'
	},
	module: {
		loaders: loaders
	},
	target: 'node',
	devtool: 'sourcemap',
	plugins: [
		// new WebpackNotifierPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoEmitOnErrorsPlugin(),
		// new webpack.NamedModulesPlugin()
	]
};

const client = {
	name: 'client',
	entry: {
		'client': [path.resolve(__dirname, 'src/client.js')],
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	module: {
		loaders: loaders
	},
	plugins: [
		// new webpack.SourceMapDevToolPlugin({
		// 	filename: '[file].map',
		// 	moduleFilenameTemplate: path.relative(__dirname , '[resourcePath]')
		// })
	]
}

module.exports = [server, client];