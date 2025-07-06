const express = require('express');
const cors = require('cors');
const logsRoutes = require('./routes/logs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/logs', logsRoutes);

app.get('/', (req, res) => {
  res.send('Log Ingestion API is running...');
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
