const {
  rewireWorkboxInject,
  defaultInjectConfig
} = require("react-app-rewire-workbox");
const path = require("path");

module.exports = function override(config, env) {
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc: path.join(__dirname, "src", "sw.js")
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }

  return config;
};
