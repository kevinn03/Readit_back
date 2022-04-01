/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import { RawPost, Data, Post } from '../types';
const getData = async (subreddit: string): Promise<RawPost[] | undefined> => {
  try {
    const result = await axios.get<Data>(
      `https://www.reddit.com/r/${subreddit}/hot.json`
    );
    const data = result.data;
    return data.data.children;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return;
  }
};

const getPosts = async (subreddit: string, index = 0): Promise<Post[]> => {
  const resultArray = [];
  const result: RawPost[] | undefined = await getData(subreddit);

  for (let i = index; i < 5; i++) {
    if (result) {
      const post = result[i].data;
      const newObject: Post = {
        title: post.title,
        commentLink: `https://www.reddit.com${post.permalink}`,
        url: post.url,
        date: post.created_utc,
        image: '',
        score: post.score,
        comments: post.num_comments,
      };

      if (post.preview) {
        newObject.image = post.preview.images[0].source.url.replace('amp;', '');
      }
      resultArray.push(newObject);
    }
  }

  return resultArray;
};

export default { getData, getPosts };
