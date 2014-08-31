exports = module.exports = function(services, helpers, config) {
    return {
        app: require('./app')(services, helpers, config),
        api: require('./api')(services, helpers, config)
    };
};
