// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://dev.apimanagement.hana.ondemand.com:443',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
