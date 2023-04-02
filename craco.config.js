const path = require('path')
const CracoLessPlugin = require('craco-less')
const postcssPxToViewport = require('postcss-px-to-viewport')
// const VW = pxToViewport({
//   viewportWidth: 375,
// })
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@scss': path.resolve(__dirname, 'src/assets/styles'),
    },
  },
  style: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 750,
          viewportHeight: 1334,
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
        }),
      ],
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
