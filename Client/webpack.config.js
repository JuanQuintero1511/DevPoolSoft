const webpack = require('webpack');
const dotenv = require('dotenv');


module.exports = {
  // Otras configuraciones de Webpack

  plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
  ],
};
