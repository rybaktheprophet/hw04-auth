const { catchWraper } = require('../../../utils/index');
const { Contact } = require('../../../models/index');

/**
 * Get contacts
 */
const getControler = catchWraper(async (req, res) => {
  const { id } = req.user;

  const contacts = await Contact.find({ owner: id }).select('-__v');

  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts,
    },
  });
});

module.exports = {
  getControler,
};
