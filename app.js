const express = require('express');
const app = express();

app.get('/names', (req, res) => {
  res.send('Joonho');
});

app.listen(3500, () => {
  console.log('Server is running on port 3500');
});
