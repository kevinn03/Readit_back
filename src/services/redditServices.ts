/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';

const getData = async (subreddit: string) => {
  try {
    const { data } = await axios.get(
      `https://www.reddit.com/r/${subreddit}/hot.json`
    );

    return data.data.children;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return 'error';
  }
};

const getPosts = async (subreddit: string, index = 0) => {
  const resultArray = [];
  const result = await getData(subreddit);

  for (let i = index; i < 5; i++) {
    const post = result[i].data;
    const newObject = {
      title: post.title,
      commentLink: `https://www.reddit.com${post.permalink}`,
      url: post.url,
      date: post.created_utc,
      image: '',
    };

    if (post.preview) {
      newObject.image = post.preview.images[0].source.url.replace('amp;', '');
    }
    resultArray.push(newObject);
  }

  return resultArray;
};

export default { getData, getPosts };
