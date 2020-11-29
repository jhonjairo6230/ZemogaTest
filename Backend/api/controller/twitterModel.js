'use strict'
var Twitter = require('twitter');
/**
 * Return twitter instance
 */
const twitterConfig = {
    getTwitterConfig: () => {
        var client = new Twitter({
            consumer_key: process.env.customer_key,
            consumer_secret: process.env.consumer_secret,
            access_token_key: process.env.access_token_key,
            access_token_secret: process.env.access_token_secret
        })
        return client
    }
}

module.exports = twitterConfig