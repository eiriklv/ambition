exports = module.exports = function(Todo, helpers) {
    return function(query, callback) {
        if(!query.type) return callback('no type supplied');

        Todo.find({ type: query.type }, function(err, todos) {
            comments = todos || [];
            callback(err, todos);
        })
    };
};
