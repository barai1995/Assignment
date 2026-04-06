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

// 🚀 DevOps UI Page with Background
app.get('/devops', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>DevOps Dashboard</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          color: white;
          background: url('/devops-bg.jpg') no-repeat center center fixed;
          background-size: cover;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.7);
          min-height: 100vh;
          padding: 40px;
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          margin: 20px auto;
          border-radius: 10px;
          max-width: 800px;
        }

        h2 {
          color: #00d8ff;
        }

        ul {
          line-height: 1.6;
        }
      </style>
    </head>
    <body>

      <div class="overlay">

        <h1>🚀 DevOps CI/CD Dashboard</h1>

        <div class="card">
          <h2>📌 CI/CD Flow</h2>
          <p>
            GitHub → Jenkins → Docker Build → Docker Hub → Kubernetes → Service Exposure
          </p>
        </div>

        <div class="card">
          <h2>⚙️ Tech Stack</h2>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
            <li>ConfigMap & Secret</li>
            <li>Liveness & Readiness Probes</li>
          </ul>
        </div>

        <div class="card">
          <h2>🔐 Security</h2>
          <p>Private Docker repo with imagePullSecrets</p>
        </div>

        <div class="card">
          <h2>🛠️ Issues Fixed</h2>
          <ul>
            <li>ImagePullBackOff → Fixed using imagePullSecrets</li>
            <li>CrashLoopBackOff → Fixed liveness probe</li>
            <li>Port mismatch → Fixed service config</li>
          </ul>
        </div>

        <div class="card">
          <h2>🌐 Access</h2>
          <p>http://localhost:30007/devops</p>
        </div>

      </div>

    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});