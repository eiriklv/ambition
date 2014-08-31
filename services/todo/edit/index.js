exports = module.exports = function(Todo, helpers) {
    return function(body, callback) {
        if(!body.id) return callback('no id supplied');
        if(!body.action) return callback('no action supplied');

        Todo.findById(body.id, function(err, todo) {
            if (!todo) return callback('todo not found');

            if (todo[body.action] !== undefined) todo[body.action] = !todo[body.action];

            todo.save(function (err, product) {
                callback(err, todo);
            });
        })
    };
};
