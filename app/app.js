const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send('🚀 DevOps Assignment Running Successfully');
});

// Health check (for Kubernetes)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Simulate load endpoint
app.get('/load', (req, res) => {
  let total = 0;
  for (let i = 0; i < 1e6; i++) {
    total += i;
  }
  res.send(`Load calculated: ${total}`);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});