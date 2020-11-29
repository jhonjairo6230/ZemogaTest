'use strict';
var profileController = require('./controller/profileController')
module.exports.submit = async (event, context, callback) => {
  await profileController.createProfile(event, context, callback)
}

module.exports.list = (event, context, callback) => {
  profileController.listProfiles(event, context, callback)
}

/************** */
module.exports.get = (event, context, callback) => {
  // const params = {
  //   TableName: process.env.CANDIDATE_TABLE,
  //   Key: {
  //     id: event.pathParameters.id,
  //   },
  // };

  // dynamoDb.get(params).promise()
  //   .then(result => {
  //     const response = {
  //       statusCode: 200,
  //       body: JSON.stringify(result.Item),
  //     };
  //     callback(null, response);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     callback(new Error('Couldn\'t fetch candidate.'));
  //     return;
  //   });
}
/******** */

module.exports.update = (event, context, callback) => { }
