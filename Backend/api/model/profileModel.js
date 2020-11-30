'use strict'
const AWS = require('aws-sdk')
/**
 * get instance of DynamoDB table
 */
const profileModel = {
    getTableInstance: () => {
        AWS.config.setPromisesDependency(require('bluebird'))
        AWS.config.update({
            region: "us-east-1",
            endpoint: "https://dynamodb.us-east-1.amazonaws.com"
        })
        const dynamoDb = new AWS.DynamoDB.DocumentClient()
        return dynamoDb
    }
}

module.exports = profileModel