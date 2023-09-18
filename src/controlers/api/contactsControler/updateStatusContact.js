const { catchWraper } = require('../../../utils/index');
const { Contact } = require('../../../models/index');

/**
 * Update status contact
 */
const updateStatusContact = catchWraper(async (req, res, next) => {
  const { contactId: _id } = req.params;
  const { id: owner } = req.user;
  const { favorite } = req.body;

  const updateFavorite = await Contact.findOneAndUpdate(
    { _id, owner },
    {
      favorite,
    },
    { new: true }
  ).select('-__v');

  res.status(200).json({ data: updateFavorite });
});

module.exports = {
  updateStatusContact,
};
