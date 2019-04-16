const path = require('path');

module.exports = {
   entry: './scripts/index.js',
   output: {
      filename: 'code.js',
      path: path.resolve(__dirname, 'static')
   },
   devServer: {
      contentBase: './static',
      https: true
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
         },
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [ '@babel/preset-env', '@babel/preset-react' ]
               }
            }
         }
      ]
   }
};