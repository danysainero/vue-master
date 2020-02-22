module.exports = (on, config) => {
    // on('file:preprocessor', webpack({
    //  webpackOptions: require('@vue/cli-service/webpack.config'),
    //  watchOptions: {}
    // }))
  
    return Object.assign({}, config, {      
      integrationFolder: 'tests/e2e/specs',
    })
  }