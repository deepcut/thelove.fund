module.exports = {
  paths: {
    watched: ['source/assets']
  },
  conventions: {
    // assets:  /^source\/public\//
    assets() { return false; }
  },
  files: {
    stylesheets: {
      joinTo: 'assets/stylesheets/site.css'
    },
    javascripts: {
      joinTo: {
        'assets/javascripts/site.js': 'source/assets/javascripts/site.js',
        // 'assets/javascripts/vendor.js': /^(bower_components|vendor)/
      }
    }
  },
  modules: {
    wrapper: false
    // autoRequire: { 'site.js': ['site'] }
  },
  plugins: {
    babel: { presets: ['es2015', 'react'] },
    sass: {
      mode: 'native',
      options: {
        includePaths: [
          'bower_components/foundation-sites/scss'
        ]
      }
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    }
  }
};

