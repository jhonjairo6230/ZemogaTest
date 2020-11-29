'use strict'
var profileModel = require('../model/profileModel')
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
    updateProfile: (id) => { },
    listProfiles: (req, context, callback) => {
        var params = {
            TableName: process.env.PORTFOLIO_TABLE,
            ProjectionExpression: "id, description, image_url,twitter_user_name,title"
        };
        console.log("Scanning profile table.");
        const onScan = (err, data) => {
            if (err) {
                console.log('Scan failed to load data. Error JSON:', JSON.stringify(err, null, 2));
                callback(err);
            } else {
                console.log("Scan succeeded.");
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
    getProfile: (id) => { }
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
    }
}

module.exports = profileController