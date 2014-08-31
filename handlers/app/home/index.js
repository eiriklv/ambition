var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/home');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'Ambition',
            description: 'Follow your dreams'
        }

        helpers.react.renderMarkupToString({
            component: App,
            clientScripts: ['/javascript/home.js'],
            context: context,
            staticPage: false,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
