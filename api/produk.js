// request.js
const express = require('express');

const app = express();
app.use(express.json()); // Middleware untuk membaca JSON

app.post('/api/webhook', (req, res) => {
  console.log('Webhook diterima:', req.body);
  
  // Kirim respons ke server pengirim
  res.status(200).json({ message: 'Webhook diterima' });
});

module.exports = app;
