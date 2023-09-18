const { Router } = require('express');

const { authControlers } = require('../controlers/index');
const { authMidelwer } = require('../midelvers/index');

const { chekUserData, userIsNew, userDataIsValid, authDecodedMidelwer } = authMidelwer;

const { registrationControler, loginControler, logoutControler, currentUserControler } =
  authControlers;

const router = Router();

router.post('/users/register', chekUserData, userIsNew, registrationControler);
router.post('/users/login', chekUserData, userDataIsValid, loginControler);
router.get('/users/logout', authDecodedMidelwer, logoutControler);
router.get('/users/current', authDecodedMidelwer, currentUserControler);

module.exports = { authRouter: router };
