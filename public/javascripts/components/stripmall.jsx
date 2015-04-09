/*
    The root react component
    Every strip mall needs a video store...
 */
var React = require("react"),
    VideoShop = require("./videoshop");

var Stripmall = React.createClass({
    getInitialState() {
        var params = this.props.params || {};

        return {
            q: params.q || "",
            movies: this.props.movies
        };
    },
    render() {
        return (
            <VideoShop movies={this.state.movies} search={this.state.q} />
        );
    }
});

module.exports = Stripmall;
