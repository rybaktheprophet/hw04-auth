const { Router } = require('express');

const { contactsMidelwer, authMidelwer } = require('../midelvers/index');
const { contactsControlers } = require('../controlers/index');

const { authDecodedMidelwer } = authMidelwer;

const {
  checkExistFavorite,
  checkReqBody,
  chexkId,
  createContactValidator,
  updeteContactValidator,
} = contactsMidelwer;

const {
  getControler,
  getByIdControler,
  createControler,
  deleteControler,
  updeteControler,
  updateStatusContact,
} = contactsControlers;

const router = Router();

router.use(authDecodedMidelwer);

router.get('/', getControler);
router.post('/', checkReqBody, createContactValidator, createControler);

router.use('/:contactId', chexkId);
router.get('/:contactId', getByIdControler);
router.delete('/:contactId', deleteControler);
router.put('/:contactId', checkReqBody, updeteContactValidator, updeteControler);

router.patch('/:contactId/favorite', checkExistFavorite, updateStatusContact);

module.exports = {
  contactsRouter: router,
};
