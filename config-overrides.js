// config-overrides.js
module.exports = function override(config, env) {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map(subRule => {
          if (
            subRule.loader &&
            subRule.loader.includes('source-map-loader') &&
            subRule.exclude
          ) {
            subRule.exclude.push(/node_modules\/@react-aria\/ssr\/dist/);
          }
          return subRule;
        });
      }
      return rule;
    });
    return config;
  };
  