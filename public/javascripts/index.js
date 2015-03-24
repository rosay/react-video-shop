/*
    Client-side app entry point
*/
var React = require("react"),
    Stripmall = React.createFactory(require("components/stripmall")),
    httpplease = require("httpplease"),
    qs = require("querystring");

window.onload = function() {
    var queryStrings = location.search.substring(location.search.indexOf("?") + 1, location.search.length);
    var params = qs.decode(queryStrings);

    httpplease({ method: 'GET', url: "http://localhost:3000/data/movies.json" }, function(err, response) {
        var props = {
            movies: JSON.parse(response.body),
            params: params
        };

        // Render client side content
        React.render(
            Stripmall(props),
            document.getElementById("VideoStore")
        );
    });
};
