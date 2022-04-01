export interface Data {
  data: { children: RawPost[] };
}

export interface RawPost {
  data: {
    title: string;
    permalink: string;
    url: string;
    created_utc: string;
    image?: string;
    score: number;
    num_comments: number;
    preview?: {
      images: { source: { url: string; width: number; height: number } }[];
    };
  };
}
export interface Post {
  title: string;
  commentLink: string;
  url: string;
  date: string;
  image?: string;
  score: number;
  comments: number;
}
