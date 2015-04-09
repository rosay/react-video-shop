require("node-jsx").install({
    harmony: true,
    extension: ".jsx"
});

var React = require("react"),
    expose = require('express-expose'),
    Stripmall = React.createFactory(require("../public/javascripts/components/stripmall")),
    api = require('../public/data/api');

module.exports = function(app) {
    app = expose(app);

    /* GET home page. */
    app.get('/', function(req, res) {

        // Call fake endpoint and get movie data.
        api.getMovies(function(movies) {

            // Render server side content
            var props = {
                movies: movies,
                params: req.query
            };

            // Make props available to the client
            res.expose(props, 'VideoShop', 'script');

            var markup = React.renderToString(Stripmall(props));

            res.render('index', {
                title: "The Video Shop",
                markup: markup
            });
        })

    });
};