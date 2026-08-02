import express from 'express';
import login from './routes/auth.route.js';

const app = express();
const PORT = 7000;

app.get('/', (req, res) => {
  res.status(200).send('<h1>Backend is running</h1>');
});

app.get('/health', (req, res) => {
  res.send('Your app is running');
});

app.use('/login', login);

app.listen(PORT, () => {
  console.log(`Your Server is running on http:localhost:${PORT}`);
});
