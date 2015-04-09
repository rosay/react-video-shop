var httpplease = require('httpplease');

module.exports = {
    getMovies: function (cb) {
        httpplease({method: 'GET', url: "http://localhost:3000/data/movies.json"}, function (err, response) {
            if (err) console.log(err);

            cb(JSON.parse(response.body));
        });
    }
};
