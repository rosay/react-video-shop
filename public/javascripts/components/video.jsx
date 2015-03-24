var React = require("react"),
    ReactPropTypes = React.PropTypes;

var Video = React.createClass({
    propTypes: {
        title: ReactPropTypes.string.isRequired,
        director: ReactPropTypes.string.isRequired,
        year: ReactPropTypes.number.isRequired,
        genre: ReactPropTypes.string.isRequired
    },

    render: function() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.director}</td>
                <td>{this.props.year}</td>
                <td>{this.props.genre}</td>
            </tr>
        )
    }
});

module.exports = Video;
