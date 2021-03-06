var React = require("react"),
    Video = require("./video");

var VideoShop = React.createClass({
    propTypes: {
        search: React.PropTypes.string,
        movies: React.PropTypes.array.isRequired
    },

    getInitialState() {
        return {
            search: this.props.search || ""
        };
    },

    handleChange(event) {
        var text = event.target.value;

        this.setState({
            search: text
        });
    },

    filterMovies () {
        var searchTerm = this.state.search.toLowerCase();

        return this.props.movies.filter (function (movie) {
            return movie.title.toLowerCase().indexOf(searchTerm) != -1;
        });
    },

    render() {
        var Videos = this.filterMovies().map(function (movie, index) {
           return (
               <Video key={index} title={movie.title} director={movie.director} year={movie.year} genre={movie.genre} />
           )
        });

        return (
            <div>
                <div id="search">
                    <span>Movie search:&nbsp;</span>
                    <input type="text" onChange={this.handleChange} value={this.state.search} />
                    <span>&nbsp;(Count: {Videos.length})</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Year</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Videos}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = VideoShop;
