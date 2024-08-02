// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const bfhlRouter = require('./bfhl');

// app.use(bodyParser.json());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Welcome to my API!');
// });

// app.post('/bfhl', (req, res) => {
//   const { data } = req.body;
//   const userId = 'john_doe_17091999';
//   const email = 'john@xyz.com';
//   const rollNumber = 'ABCD123';
//   const numbers = [];
//   const alphabets = [];
//   let highestAlphabet = '';

//   data.forEach((item) => {
//     if (isNaN(item)) {
//       alphabets.push(item);
//       if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
//         highestAlphabet = item;
//       }
//     } else {
//       numbers.push(item);
//     }
//   });

//   const response = {
//     is_success: true,
//     user_id: userId,
//     email,
//     roll_number: rollNumber,
//     numbers,
//     alphabets,
//     highest_alphabet: [highestAlphabet],
//   };

//   res.json(response);
// });

// app.get('/bfhl', (req, res) => {
//   const response = {
//     operation_code: 1,
//   };
//   res.json(response);
// });

// app.use('/bfhl', bfhlRouter);

// app.listen(4000, () => {
//   console.log('Server started on port 4000');
// }).on('error', (error) => {
//   console.error('Error starting server:', error);
// });





const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  const userId = 'john_doe_17091999';
  const email = 'john@xyz.com';
  const rollNumber = 'ABCD123';
  const numbers = [];
  const alphabets = [];
  let highestAlphabet = '';

  data.forEach((item) => {
    if (isNaN(item)) {
      alphabets.push(item);
      if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
        highestAlphabet = item;
      }
    } else {
      numbers.push(item);
    }
  });

  const response = {
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_alphabet: [highestAlphabet],
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  const response = {
    operation_code: 1,
  };
  res.json(response);
});

const port = 4000;
try {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (error) {
  console.error(`Error starting server: ${error}`);
}



