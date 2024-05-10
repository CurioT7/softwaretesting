const { startDevServer } = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    return startDevServer({ options });
  });
  return config;
};
