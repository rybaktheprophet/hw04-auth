const { catchWraper } = require('../../../utils/index');
const { Contact } = require('../../../models/index');

/**
 * Create contact
 */
const createControler = catchWraper(async (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.user;
  const newContact = await Contact.create({ name, email, phone, owner: id });

  res.status(201).json({
    status: 'created',
    data: { newContact },
  });
});

module.exports = {
  createControler,
};
