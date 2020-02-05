module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/suffrage/'
      : '/',

    pwa: {
      name: 'Women\'s Suffrage in Iowa',
      themeColor: '#FFCD00'
    },

    // chainWebpack: config => {
    //   config.plugins.delete('pwa');
    //   config.plugins.delete('workbox');
    // }
}