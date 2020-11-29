'use strict'
const AWS = require('aws-sdk')
/**
 * get instance of DynamoDB table
 */
const profileModel = {
    getTableInstance: () => {
        AWS.config.setPromisesDependency(require('bluebird'))
        const dynamoDb = new AWS.DynamoDB.DocumentClient()
        return dynamoDb
    }
}

module.exports = profileModel