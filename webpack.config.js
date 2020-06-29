const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.NODE_ENV,
    entry: path.resolve(__dirname, 'Client/src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          exclude: /(node_modules)/,
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
        },

        {
          test: /\.html$/i, // Nos sirve para que nos pueda cargar files imagenes 
          loader: 'html-loader'
        },

        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      })
    ]
  }
}