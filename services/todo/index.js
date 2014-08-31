exports = module.exports = function(Todo, helpers) {
    return {
        get: require('./get')(Todo, helpers),
        remove: require('./remove')(Todo, helpers),
        create: require('./create')(Todo, helpers),
        edit: require('./edit')(Todo, helpers)
    };
};
