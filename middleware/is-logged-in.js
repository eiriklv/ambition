exports = module.exports = function () {
    return function (req, res, next) {
        if (!req.session.loggedIn) return res.redirect('/');
        return next();
    };
};
