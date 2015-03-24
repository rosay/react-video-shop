var React = require("react");

var Video = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        director: React.PropTypes.string.isRequired,
        year: React.PropTypes.number.isRequired,
        genre: React.PropTypes.string.isRequired
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
