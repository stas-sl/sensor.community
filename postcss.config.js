const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        // // only needed if you want to purge
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
        purgecss({
            content: ["./src/**/*.svelte", "./src/**/*.html", './content/**/*.md'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}