/**
 * Created by youngmoon on 8/1/15.
 */

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}