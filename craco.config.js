// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.forEach(rule => {
          if (rule.oneOf) {
            rule.oneOf.forEach(subRule => {
              if (
                subRule.loader &&
                subRule.loader.includes('source-map-loader') &&
                subRule.exclude
              ) {
                subRule.exclude.push(/node_modules\/@react-aria\/ssr\/dist/);
              }
            });
          }
        });
        return webpackConfig;
      },
    },
  };
  