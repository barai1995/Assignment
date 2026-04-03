const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// APIs
app.get('/api/health', (req, res) => {
  res.json({ status: "OK 🚀" });
});

app.get('/api/load', (req, res) => {
  let total = 0;
  for (let i = 0; i < 1e6; i++) total += i;
  res.json({ result: total });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});