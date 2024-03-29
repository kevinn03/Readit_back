import axios from 'axios';
import { RawPost, Data, Post } from '../types';

// get subreddit data
const getData = async (subreddit: string): Promise<RawPost[] | null> => {
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
    return null;
  }
};

// create posts from subreddit data
const getPosts = async (
  subreddit: string,
  index = 0,
  end = index + 2
): Promise<Post[] | null> => {
  try {
    const resultArray = [];
    const result: RawPost[] | null = await getData(subreddit);

    if (index < 0) {
      index = 0;
    }
    if (end <= index) {
      end = index + 2;
    }
    //gets post from index number to end non inclusive
    for (let i = index; i < end; i++) {
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
          const refactoredImageUrl = post.preview.images[0].source.url
            .split('amp;')
            .join('');
          newObject.image = refactoredImageUrl;
        }

        resultArray.push(newObject);
      }
    }
    return resultArray;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return null;
  }
};

export default { getData, getPosts };
