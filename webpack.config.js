const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';


// source map
function setupDevtool() {
	if (IS_DEV) return 'eval';
	if (IS_PROD) return 'false';
}

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	},
	mode: NODE_ENV || 'development',
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "index.js"
	},
	module: {
		rules: [{
			test: /\.[tj]sx?$/,
			use: ['ts-loader']
		}]
	},
	plugins: [
		new HTMLWebpackPlugin({ //Динамичное подключение скриптов
			template: path.resolve(__dirname, 'index.html')
		})
	],
	devServer: { // сервер
		port: 3000,
		open: true,//автоматически откроется страница при поднятии сервера
		hot: IS_DEV// автоперезагрузка
	},
	devtool: setupDevtool()
};
