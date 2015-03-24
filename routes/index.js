/*
    Server-side app entry point
*/
var express = require('express'),
    router = express.Router(),
    httpplease = require('httpplease');

require("node-jsx").install({
    harmony: true,
    extension: ".jsx"
});

var React = require("react"),
    Stripmall = React.createFactory(require("../public/javascripts/components/stripmall"));

/* GET home page. */
router.get('/', function(req, res) {
    httpplease({ method: 'GET', url: "http://localhost:3000/data/movies.json" }, function(err, response) {
        // Render server side content
        var props = {
            movies: JSON.parse(response.body),
            params: req.query
        };

        var markup = React.renderToString(Stripmall(props));

        res.render('index', {
            title: "The Video Shop",
            markup: markup
        });
    });
});

module.exports = router;
