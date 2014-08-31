var request = require('superagent');

exports = module.exports = function(config) {
    return {
        todos: require('./todos')(request, config.api.url + '/todos'),
        comments: require('./comments')(request, config.api.url + '/comments')
    };
};
