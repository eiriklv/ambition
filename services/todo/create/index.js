exports = module.exports = function(Todo, helpers) {
    return function(body, callback) {
        if (!body) callback('body missing');
        console.log(body);

        var todo = new Todo({
            type: body.type,
            text: body.text
        });

        todo.save(function(err, product) {
            callback(err, product);
        });
    };
};
