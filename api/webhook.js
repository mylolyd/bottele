const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(express.json()); // Middleware untuk membaca JSON


const bot = new TelegramBot('7908620487:AAF4g43C8WDQ_MPr2Eo9Dg2XYusyQbvMS6U');

// Endpoint webhook
app.post('/api/webhook', (req, res) => {
  bot.processUpdate(req.body);
  res.status(200).json({ message: 'Webhook diterima' });
});

// Handler pesan masuk
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Halo, ${msg.from.first_name}! Anda mengirim: ${msg.text}`);
});

module.exports = app;
