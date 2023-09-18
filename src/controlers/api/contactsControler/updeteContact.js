const { catchWraper } = require('../../../utils/index');
const { Contact } = require('../../../models/index');

/**
 * Updete contact
 */
const updeteControler = catchWraper(async (req, res, next) => {
  const { contactId: _id } = req.params;
  const { id: owner } = req.user;
  const { email, name, phone } = req.body;

  const newContact = await Contact.findOneAndUpdate(
    { _id, owner },
    {
      name,
      phone,
      email,
    },
    { new: true }
  ).select('-__v');

  res.status(200).json({ message: newContact });
});

module.exports = {
  updeteControler,
};
