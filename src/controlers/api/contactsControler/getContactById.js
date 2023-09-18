const { catchWraper } = require('../../../utils/index');
const { Contact } = require('../../../models/index');

/**
 * Get contact by ID
 */
const getByIdControler = catchWraper(async (req, res, next) => {
  const { contactId: _id } = req.params;
  const { id: owner } = req.user;

  const contact = await Contact.findOne({ owner, _id });

  res.json({
    status: 'success',
    code: 200,
    data: {
      contact,
    },
  });
});

module.exports = {
  getByIdControler,
};
