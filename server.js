
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/documents', (req, res) => {
  const dbPath = path.join(__dirname, 'database.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'DB not found' });
    try { res.json(JSON.parse(data)); } catch(e) { res.json({ documents: [] }); }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log('Server listening on', PORT));
