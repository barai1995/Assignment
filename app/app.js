const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files (for images later)
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

// 🚀 DevOps UI Page
app.get('/devops', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>DevOps Dashboard</title>
      <style>
        body { font-family: Arial; padding: 30px; background: #f4f6f8; }
        h1 { color: #2c3e50; }
        h2 { color: #34495e; }
        .card {
          background: white;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        ul { line-height: 1.6; }
      </style>
    </head>
    <body>

      <h1>🚀 DevOps CI/CD Dashboard</h1>

      <div class="card">
        <h2>📌 CI/CD Flow</h2>
        <p>
          GitHub → Jenkins → Docker Build → Docker Hub → Kubernetes Deployment → Service Exposure
        </p>
      </div>

      <div class="card">
        <h2>⚙️ Tech Stack</h2>
        <ul>
          <li>Docker (Containerization)</li>
          <li>Kubernetes (Deployment & Scaling)</li>
          <li>Jenkins (CI/CD Pipeline)</li>
          <li>ConfigMap & Secret</li>
          <li>Liveness & Readiness Probes</li>
        </ul>
      </div>

      <div class="card">
        <h2>🔐 Security</h2>
        <p>Private Docker repository with Kubernetes imagePullSecrets</p>
      </div>

      <div class="card">
        <h2>🛠️ Issues Fixed</h2>
        <ul>
          <li>ImagePullBackOff → Fixed using imagePullSecrets</li>
          <li>CrashLoopBackOff → Fixed incorrect liveness probe</li>
          <li>Port mismatch → Fixed service targetPort</li>
        </ul>
      </div>

      <div class="card">
        <h2>🌐 Access</h2>
        <p>Application exposed via NodePort → http://localhost:30007</p>
      </div>

    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});