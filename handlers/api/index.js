exports = module.exports = function(services) {
    return {
        todo: require('./todo')(services.todos),
        comments: require('./comments')(services.comments)
    };
};
