import express from 'express';
import redditRouter from './routes/reddit';
import cors from 'cors';
import middleware from './utils/middleware';
const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
const PORT = 3001;

app.use('/api/reddit', redditRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
