// request.js
const axios = require('axios');

async function ambilData() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    console.log('Harga Bitcoin:', response.data.bpi.USD.rate, 'USD');
  } catch (error) {
    console.error('Gagal mengambil data:', error.message);
  }
}

// Jalankan setiap 10 detik
setInterval(ambilData, 10000);
