'use strict';
var profileController = require('./controller/profileController')
module.exports.submit = async (event, context, callback) => {
  await profileController.createProfile(event, context, callback)
}

module.exports.list = (event, context, callback) => {
  profileController.listProfiles(event, context, callback)
}

module.exports.get = (event, context, callback) => {
  profileController.getProfile(event, context, callback)
}

module.exports.update = async (event, context, callback) => {
  await profileController.updateProfile(event, context, callback)
}
