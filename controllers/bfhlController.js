const User = require('../models/user');

const user = new User('John Doe', '17091999', 'john@xyz.com', 'ABCD123');

const postBfhl = (req, res) => {
  const data = req.body.data;
  const numbers = [];
  const alphabets = [];
  let highestAlphabet = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
      if (item.toUpperCase() > highestAlphabet[0]) {
        highestAlphabet = [item];
      } else if (item.toUpperCase() === highestAlphabet[0]) {
        highestAlphabet.push(item);
      }
    }
  });

  res.json({
    is_success: true,
    user_id: user.getUserId(),
    email: user.email,
    roll_number: user.rollNumber,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
};

const getBfhl = (req, res) => {
  res.json({ operation_code: 1 });
};

module.exports = { postBfhl, getBfhl };