import express from 'express';
import redditRouter from './routes/reddit';

const app = express();

const PORT = 3001;

app.use('/api/reddit', redditRouter);

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
