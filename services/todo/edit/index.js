exports = module.exports = function(Todo, helpers) {
    return function(body, callback) {
        if(!body.id) return callback('no id supplied');

        Todo.findById(body.id, function(err, todo) {
            if (!todo) return callback('todo not found');

            todo.complete = !todo.complete;

            todo.save(function (err, product) {
                callback(err, todo);
            });
        })
    };
};
