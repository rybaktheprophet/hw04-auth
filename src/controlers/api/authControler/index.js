const { registrationControler } = require('./registrationControler');
const { loginControler } = require('./loginControler');
const { logoutControler } = require('./logoutControler');
const { currentUserControler } = require('./currentUserControler');

module.exports = {
  registrationControler,
  loginControler,
  logoutControler,
  currentUserControler,
};
