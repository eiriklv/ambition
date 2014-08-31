exports = module.exports = function(Todo, helpers) {
    return function(query, callback) {
        if(!query.type) return callback('no type supplied');

        Todo.remove({ type: query.type, complete: true }, function(err) {
            callback(err);
        });
    };
};
