const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Token bot Telegram Anda
const TOKEN = 'YOUR_BOT_TOKEN_HERE';

// Buat instance bot
const bot = new TelegramBot(TOKEN, { polling: false });

// Buat instance Express
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk webhook
app.post('/webhook', (req, res) => {
  const { message } = req.body;

  // Tangani pesan
  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text;

    // Balas pesan
    if (text === '/start') {
      bot.sendMessage(chatId, 'Halo! Saya bot Telegram Anda.');
    } else {
      bot.sendMessage(chatId, `Anda mengatakan: ${text}`);
    }
  }

  res.sendStatus(200);
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
