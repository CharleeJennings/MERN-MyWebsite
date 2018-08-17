var path = require ( 'path')
var webpack = require ('webpack')
var nodeExternals = require ('webpack-node-externals')



var browserConfig =
{
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
       			 use: [
          				'url-loader',
         		 		{
         		   			loader: 'image-webpack-loader',
         		   			options: {
            				 	bypassOnDebug: true, // webpack@1.x
           				   		disable: true, // webpack@2.x and newer
             				},
         		 		},
        			 ],
			},
      {
                    test: /\.(woff|woff2|eot|ttf)$/i,
                    loader: "file-loader?name=fonts/[name]-[hash].[ext]"
      },
			{
        		test: /\.(s*)css$/,
        		use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },


		]
	},
	plugins:
	[
		new webpack.DefinePlugin({
     	 __isBrowser__: "true"
    })
	]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {test:  /\.(gif|png|jpe?g|svg)$/i, use: 'ignore-loader'},
      {test: /\.css$/, use: 'ignore-loader' },
			{test: /\.scss/, use: 'ignore-loader'}

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
