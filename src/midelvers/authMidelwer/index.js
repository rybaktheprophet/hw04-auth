const { authDecodedMidelwer } = require('./decodedMidelwer');
const { chekUserData } = require('./validateUserData');
const { userIsNew } = require('./userIsNew');
const { userDataIsValid } = require('./userDataIsValid');

module.exports = {
  authDecodedMidelwer,
  chekUserData,
  userIsNew,
  userDataIsValid,
};
