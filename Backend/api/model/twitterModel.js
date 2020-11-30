'use strict'
var Twitter = require('twitter');
/**
 * Return twitter instance
 */
const twitterConfig = {
    getTwitterConfig: () => {
        // var client = new Twitter({
        //     consumer_key: process.env.customer_key,
        //     consumer_secret: process.env.consumer_secret,
        //     access_token_key: process.env.access_token_key,
        //     access_token_secret: process.env.access_token_secret
        // })
        var client = new Twitter({
            consumer_key: 'KRy7l0v8wex3w8Sy5zThai3Ea',
            consumer_secret: 'X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu',
            access_token_key: '1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja',
            access_token_secret: 'tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj'
        })
        return client
    }
}

module.exports = twitterConfig