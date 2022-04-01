/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import redditServices from '../services/redditServices';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('ping');
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:subreddit', async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const sub: string = req.params.subreddit;
  const data = await redditServices.getPosts(sub);
  console.log(data);
  res.json(data);
});

export default router;
