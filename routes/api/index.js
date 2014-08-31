exports = module.exports = function(app, express, middleware, handlers, path) {
    app.use(path, require('./todos')(express, middleware, handlers, '/todos'));
    app.use(path, require('./comments')(express, middleware, handlers, '/comments'));
};
