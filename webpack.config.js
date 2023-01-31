const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "./src/js/main.js"),
		movies: path.resolve(__dirname, "./src/js/movies.js"),
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name][contenthash].js",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Movies",
			filename: "index.html",
			template: "./src/indexTemp.html",
			chunks: ["main"],
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public"),
		},
		hot: true,
		open: true,
		historyApiFallback: true,
		port: 2000,
		compress: true,
	},
};
