exports = module.exports = function (services, helpers, config) {
    return function (req, res, next) {
        if (req.body && req.body.token) {
            if (req.body.token === config.get('server.token')) {
                req.session.loggedIn = true;
            }
        }

        res.redirect('/home');
    };
};
