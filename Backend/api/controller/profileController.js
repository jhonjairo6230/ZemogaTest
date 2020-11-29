'use strict'
var profileModel = require('../model/profileModel')
var twitterConfig = require('../model/twitterModel')
const uuid = require('uuid');

const profileController = {
    createProfile: async (req, context, callback) => {
        var profileInfo = {
            id: uuid.v1(),
            description: req.description,
            image_url: req.image_url,
            twitter_user_name: req.twitter_user_name,
            title: req.title,
            submittedAt: '',
            updatedAt: '',
        }

        if (typeof profileInfo.title !== 'string' || typeof profileInfo.twitter_user_name !== 'string'
            || typeof profileInfo.image_url !== 'string' || typeof profileInfo.description !== 'string') {
            console.error('Validation Failed');
            callback(new Error('Couldn\'t submit profile because of validation errors.'))
            return
        }
        try {
            const res = await operations.submitProfile(profileInfo)
            console.log(res)
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: `Sucessfully submitted profile with title ${profileInfo.title}`,
                    profileId: res.id
                })
            })
        } catch (error) {
            console.log(error)
            callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    message: `Unable to submit profile with title ${profileInfo.title}`
                })
            })
        }
    },
    updateProfile: async (req, context, callback) => {
        var profileInfo = {
            id: req.id,
            description: req.description,
            image_url: req.image_url,
            twitter_user_name: req.twitter_user_name,
            title: req.title,
            updatedAt: '',
        }

        if (typeof profileInfo.title !== 'string' || typeof profileInfo.twitter_user_name !== 'string'
            || typeof profileInfo.image_url !== 'string' || typeof profileInfo.description !== 'string') {
            console.error('Validation Failed');
            callback(new Error('Couldn\'t update profile because of validation errors.'))
            return
        }
        try {
            const res = await operations.updateProfile(profileInfo)
            console.log(res)
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: `Sucessfully updated profile with title ${profileInfo.title}`,
                    profileId: res.id
                })
            })
        } catch (error) {
            console.log(error)
            callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    message: `Unable to update profile with title ${profileInfo.title}`
                })
            })
        }
    },
    listProfiles: (req, context, callback) => {
        var params = {
            TableName: process.env.PORTFOLIO_TABLE,
            ProjectionExpression: "id, description, image_url,twitter_user_name,title"
        };
        console.log("Scanning profile table.");
        const onScan = (err, data) => {
            if (err) {
                console.log('Scan failed to load data. Error JSON:', JSON.stringify(err, null, 2))
                callback(err);
            } else {
                console.log("Scan succeeded.")
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify({
                        candidates: data.Items
                    })
                })
            }
        }
        profileModel.getTableInstance().scan(params, onScan);
    },
    getProfile: async (event, context, callback) => {
        const params = {
            TableName: process.env.PORTFOLIO_TABLE,
            Key: {
                id: event.pathParameters.id,
            },
        }

        profileModel.getTableInstance().get(params).promise()
            .then(result => {
                operations.getUserTweet(result.Item, callback)
            })
            .catch(error => {
                console.error(error);
                callback(new Error('Couldn\'t fetch candidate.'));
                return;
            })
    }
}

const operations = {
    submitProfile: profile => {
        const timestamp = new Date().getTime()
        profile.submittedAt = timestamp
        profile.updatedAt = timestamp
        console.log('Submitting profile', profile);
        const profileInfo = {
            TableName: process.env.PORTFOLIO_TABLE,
            Item: profile,
        }
        return profileModel.getTableInstance().put(profileInfo).promise()
            .then(res => profile);
    },
    updateProfile: profile => {
        const timestamp = new Date().getTime()
        profile.updatedAt = timestamp
        console.log('Updating profile', profile);
        const params = {
            TableName: process.env.PORTFOLIO_TABLE,
            Key: {
                "id": profile.id
            },
            UpdateExpression: "set updatedAt = :updatedAt, title=:title, twitter_user_name=:twitter_user_name, image_url=:image_url, description = :description",
            ExpressionAttributeValues: {
                ":updatedAt": profile.updatedAt,
                ":title": profile.title,
                ":twitter_user_name": profile.twitter_user_name,
                ":image_url": profile.image_url,
                ":description": profile.description
            },
            ReturnValues: "UPDATED_NEW"
        };

        return profileModel.getTableInstance().update(params).promise()
            .then(res => profile)
    },
    getUserTweet: (profile, callback) => {
        var params = { screen_name: profile.twitter_user_name }
        twitterConfig.getTwitterConfig().get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                const resp = Object.assign(profile, { twitter_time_line: tweets })
                const responseObject = {
                    statusCode: 200,
                    body: JSON.stringify(resp),
                }
                callback(null, responseObject);
            } else {
                console.error(error);
                callback(new Error('Couldn\'t fetch profile.'));
                return;
            }
        })
    }
}

module.exports = profileController