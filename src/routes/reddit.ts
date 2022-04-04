/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import redditServices from '../services/redditServices';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('ping');
});

router.get('/:subreddit', async (req, res, next) => {
  try {
    const sub: string = req.params.subreddit;
    const data = await redditServices.getPosts(sub);

    return res.json(data);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return next(e);
  }
});

export default router;
