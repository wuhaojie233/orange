const CracoLessPlugin = require('craco-less')
const { resolve } = require('path')

/* craco.config.js */
module.exports = {
  webpack: {
    alias: {
      '@asstes': resolve('src/asstes'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
