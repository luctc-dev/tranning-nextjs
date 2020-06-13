// next.config.js
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withImages(
    withCSS(
        withSass()
    )
)