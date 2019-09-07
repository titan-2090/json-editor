const mix = require('laravel-mix');

mix.webpackConfig({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
    ],
    alias: {
      '@': __dirname + '/resources/js',
    },
  },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/main.js', 'public/js')
  .extract([
    'axios',
    'vue',
    'vue-axios',
    'vue-i18n',
    'vue-router',
    'vuetify',
    'vuex',
  ])
  .sourceMaps();
