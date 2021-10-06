const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#EE6F57",
              "@font-family": "'neue' Arial, Helvetica, sans-serif",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
