exports = module.exports = function(mongoose) {
    return {
        Comment: require('./comment')('comment', mongoose),
        Todo: require('./todo')('todo', mongoose)
    };
};
