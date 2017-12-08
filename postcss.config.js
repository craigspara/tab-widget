const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const postcssSelectorNot = require('postcss-selector-not');

module.exports = {
  map: true,
  plugins: [
    autoprefixer({
      browsers: [
        'last 2 version'
      ]
    }),
    customProperties(),
    postcssSelectorNot()
  ]
};