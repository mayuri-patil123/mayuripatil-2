const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Harry Fitness Express Server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
