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

    var props = {
        params: params
    };

    // Render client side content
    React.render(
        Stripmall(props),
        document.getElementById("VideoStore")
    );
};
