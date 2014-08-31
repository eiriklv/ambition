var nodejsx = require('node-jsx').install();
var Landing = require('../../../client/javascript/landing');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'Ambition',
            description: 'Another todo-app',
        };

        helpers.react.renderMarkupToString({
            component: Landing,
            clientScripts: ['/javascript/landing.js'],
            context: context,
            staticPage: true,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
