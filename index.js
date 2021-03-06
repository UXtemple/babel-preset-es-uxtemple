var LOOSE = {loose: true};

module.exports = {
  plugins: [
    require('babel-plugin-async-to-promises'),
    require('babel-plugin-check-es2015-constants'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoped-functions'),
    require('babel-plugin-transform-es2015-block-scoping'),
    [require('babel-plugin-transform-es2015-classes'), LOOSE],
    [require('babel-plugin-transform-es2015-computed-properties'), LOOSE],
    [require('babel-plugin-transform-es2015-destructuring'), LOOSE],
    require('babel-plugin-transform-es2015-duplicate-keys'),
    [require('babel-plugin-transform-es2015-for-of'), LOOSE],
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-literals'),
    require('babel-plugin-transform-es2015-object-super'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    [require('babel-plugin-transform-es2015-spread'), LOOSE],
    require('babel-plugin-transform-es2015-sticky-regex'),
    [require('babel-plugin-transform-es2015-template-literals'), LOOSE],
    require('babel-plugin-transform-es2015-typeof-symbol'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-object-rest-spread')
  ],
  presets: [
    require('babel-preset-react')
  ]
};
