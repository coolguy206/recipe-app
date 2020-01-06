module.exports = {

  options: {
    // sourceMap: true,
    presets: ['@babel/preset-env']
  },

  dist: {
    files: [{
      expand: true,
      cwd: 'js/',
      src: '*.js',
      dest: 'js/babel/'
    }]
  },


};