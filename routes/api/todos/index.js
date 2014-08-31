exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .get(handlers.todo.get)
        .put(handlers.todo.edit)
        .post(handlers.todo.create)
        .delete(handlers.todo.remove);

    return router;
};
