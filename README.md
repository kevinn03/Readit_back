# Readit Backend

Explore [ReadIt News](https://readit-news.herokuapp.com/)

ReadIt News is a news website that aggregates news content from Reddit


## Instructions
* clone this repository
* run ```npm install``` inside root directory and frontend directory
* run the seed file
* run ```npm run dev``` in root directory
* navigate to ```localhost:3001``` in your browser

<img width="800" alt="ReadIt News picture" src="https://i.imgur.com/Arx4WoG.png">


## Technologies
### Frontend
* TypeScript
* React.js
* Bootstrap


### Backend
* TypeScript
* Express.js
* Node.js

### Api providing endpoints that allow for:

* Getting subreddit posts

## Endpoint Documentation

### GET /api/reddit/{subreddit}

* Returns a list of posts from that subreddit.
* Optional query parameter index allows for extraction of reddit posts starting at that index
* Default index is 0
* Ex /api/reddit/nba?index=2


**Successful Response:**

```JSON
[
{
title: "[George Karl] Maybe the Nuggets should hire @MarkJackson13 for the next couple weeks. He can then get Iguodala to share some intel on the Warriors. 🐀😆",
commentLink: "https://www.reddit.com/r/nba/comments/u3ihh1/george_karl_maybe_the_nuggets_should_hire/",
url: "https://www.reddit.com/r/nba/comments/u3ihh1/george_karl_maybe_the_nuggets_should_hire/",
date: 1649945598,
image: "https://external-preview.redd.it/hfQoS-Z7QbAMphGV3pE9R0DfPyf9KvawNKQnEIagQ5o.jpg?auto=webp&s=2d082ba7f6ffbf69309291460aece968c10d53dc",
score: 1039,
comments: 388
},
{
title: "Pascal Siakam reacts to Nick Nurse saying the Sixers vs Raptors series will be a "slug fest".",
commentLink: "https://www.reddit.com/r/nba/comments/u3d9we/pascal_siakam_reacts_to_nick_nurse_saying_the/",
url: "https://streamable.com/2cdv74",
date: 1649928155,
image: "https://external-preview.redd.it/Oq8TlyRyD4F0RhAzCTSTI8-xu19fVH9MOIgmI9Wb8Mw.jpg?auto=webp&s=75c5f67a586e990f25d304305519e21b290627f4",
score: 1968,
comments: 235
}
]
```

### This to do
* Add testing
* Add live date

