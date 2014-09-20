exports = module.exports = function(Todo, helpers) {
    return function(query, callback) {
        if(!query.type) return callback('no type supplied');

        Todo.find({ type: query.type }, null, { sort: { 'complete': 1, 'star': -1 }}, function(err, todos) {
            todos = todos || [];
            callback(err, todos);
        })
    };
};
