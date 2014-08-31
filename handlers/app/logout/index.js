exports = module.exports = function (services, helpers, config) {
    return function (req, res, next) {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    };
};
