const webpack = require('webpack');

module.exports = {
	
  entry: `${__dirname}/src/index.js`,

  output: {  path: `${__dirname}/docs/build`,  publicPath: '/404forspa/build/',  filename: 'bundle.js', },

  module: {    rules: [      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },    ],  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [  new webpack.optimize.UglifyJsPlugin({  output: {comments: false, },  }),  ],
  
};
