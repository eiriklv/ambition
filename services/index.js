exports = module.exports = function(models, helpers) {
    return {
        todos: require('./todo')(models.Todo, helpers),
        comments: require('./comment')(models.Comment, helpers)
    };
};
