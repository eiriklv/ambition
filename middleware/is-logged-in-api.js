exports = module.exports = function() {
    return function(req, res, next) {
        if (!req.session.loggedIn) return res.send(401, 'not authorized');
        return next();
    };
};
