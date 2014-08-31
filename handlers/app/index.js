exports = module.exports = function(services, helpers, config) {
    return {
        landing: require('./landing')(services, helpers),
        home: require('./home')(services, helpers),
        login: require('./login')(services, helpers, config),
        logout: require('./logout')()
    };
};
