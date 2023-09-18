const { checkReqBody, checkExistFavorite } = require('./checkReqBody');
const { chexkId } = require('./chexkId');
const { createContactValidator } = require('./createContactValidator');
const { updeteContactValidator } = require('./updetContactValidator');

module.exports = {
  checkReqBody,
  checkExistFavorite,
  chexkId,
  createContactValidator,
  updeteContactValidator,
};
