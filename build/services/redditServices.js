"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// get subreddit data
const getData = (subreddit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get(`https://www.reddit.com/r/${subreddit}/hot.json`);
        const data = result.data;
        return data.data.children;
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        return null;
    }
});
// create posts from subreddit data
const getPosts = (subreddit, index = 0, end = index + 2) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultArray = [];
        const result = yield getData(subreddit);
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
                const newObject = {
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
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        return null;
    }
});
exports.default = { getData, getPosts };
