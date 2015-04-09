/*
    Client-side app entry point
*/
var React = require("react"),
    Stripmall = React.createFactory(require("components/stripmall"));

window.onload = function() {

    var props = window.VideoShop;

    // Render client side content
    React.render(
        Stripmall(props),
        document.getElementById("VideoStore")
    );
};
