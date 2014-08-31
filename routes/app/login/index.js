exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .post(handlers.login);

    return router;
};
