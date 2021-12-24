const path = require('path');

module.exports = {
    mode: 'development',
  entry: '/scripts/firebase.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'firebase_bundle.js',
    library: 'webpack_lib',
  },
};