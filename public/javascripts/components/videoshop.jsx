var React = require("react"),
    Video = require("./video"),
    httpplease = require("httpplease");

var VideoShop = React.createClass({
    propTypes: {
        search: React.PropTypes.string
    },

    getInitialState() {
        return {
            search: this.props.search || ""
        };
    },

    componentDidMount() {
        var self = this;

        httpplease({ method: 'GET', url: "http://localhost:3000/data/movies.json" }, function(err, response) {
            self.setState({
                movies: JSON.parse(response.body)
            });
        });
    },

    handleChange(event) {
        var text = event.target.value;

        this.setState({
            search: text
        });
    },

    filterMovies () {
        var searchTerm = this.state.search.toLowerCase();
        var movies = this.state.movies || [];

        return movies.filter (function (movie) {
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
