const express = require('express');
const app = express();

const PORT = 3000;

//root
app.get('/', (req, res) => {
  res.send('server runs');
});

//------------------------------------------------------------------------------------------------------

//endpoint 
app.get('/api/greeting', (req, res) => {
  res.json({ message: "Hello World" });
});

//------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
