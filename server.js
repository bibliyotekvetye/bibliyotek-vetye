
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/books', (req, res) => {
  res.json(require('./src/database.json'));
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
