var gulp = require('gulp'),
    path = require("path"),
    webpack = require('gulp-webpack'),
    browserSync = require('browser-sync'),
    server = require('gulp-develop-server'),
    runSequence = require('run-sequence');

var config = {
    webpack: require('./webpack.config.js')[0],
    watch: {
        components: path.join(__dirname, "public", "javascripts", "components", "*.jsx"),
        clientJs: path.join(__dirname,"public", "javascripts", "*.js" ),
        routesJs: path.join(__dirname,"routes", "*.js" ),
        viewsPath: path.join(__dirname, "views", "*.hjs"),
        css: path.join(__dirname, "public", "stylesheets", "*.css")
    },
    server: {
        path: path.join(__dirname, "bin", "www"),
        execArgv: [ '--debug' ]
    },
    browserSync: {
        proxy: "localhost:3002"
    }
};

gulp.task( 'default', [ 'webpack', 'server:start' ], function() {
    gulp.watch(
        [
            config.watch.components,
            config.watch.clientJs,
            config.watch.routesJs,
            config.watch.viewsPath,
            config.watch.css
        ],
        function () {
            runSequence('webpack', 'server:restart');
        }
    );
});

gulp.task( 'server:start', function() {
    server.listen( config.server, function( error ) {
        if( ! error ) browserSync( config.browserSync );
    });
});

// If server scripts change, restart the server and then browser-reload.
gulp.task( 'server:restart', function() {
    server.restart( function( error ) {
        if( ! error ) browserSync.reload();
    });
});

gulp.task("webpack", function() {
    return gulp.src('app.js')
        .pipe(webpack(config.webpack))
        .pipe(gulp.dest(config.webpack.output.path));
});

