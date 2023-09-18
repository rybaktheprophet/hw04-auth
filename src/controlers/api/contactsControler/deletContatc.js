const { catchWraper } = require('../../../utils/index');
const { Contact } = require('../../../models/index');

/**
 * Delete contact
 */
const deleteControler = catchWraper(async (req, res, next) => {
  const { contactId: _id } = req.params;
  const { id: owner } = req.user;

  await Contact.findOneAndDelete({ _id, owner });

  res.json({
    masege: 'contact deleted',
    code: 200,
  });
});

module.exports = {
  deleteControler,
};
