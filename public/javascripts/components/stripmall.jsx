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
            search: params.search || ""
        };
    },
    render() {
        return (
            <VideoShop search={this.state.search} />
        );
    }
});

module.exports = Stripmall;
