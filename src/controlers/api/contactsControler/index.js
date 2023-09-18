const { getControler } = require('./getContacts');
const { getByIdControler } = require('./getContactById');
const { createControler } = require('./createContatc');
const { deleteControler } = require('./deletContatc');
const { updeteControler } = require('./updeteContact');
const { updateStatusContact } = require('./updateStatusContact');

module.exports = {
  getControler,
  getByIdControler,
  createControler,
  updeteControler,
  deleteControler,
  updateStatusContact,
};
