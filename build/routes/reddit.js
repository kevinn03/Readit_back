"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const redditServices_1 = __importDefault(require("../services/redditServices"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('ping');
});
router.get('/:subreddit', async (req, res, next) => {
    try {
        const sub = req.params.subreddit;
        const { index, end } = req.query;
        if (index && end) {
            const indexNum = Number(index);
            const endNum = Number(end);
            const data = await redditServices_1.default.getPosts(sub, indexNum, endNum);
            return res.json(data);
        }
        if (index) {
            const indexNum = Number(index);
            const data = await redditServices_1.default.getPosts(sub, indexNum);
            return res.json(data);
        }
        const data = await redditServices_1.default.getPosts(sub);
        return res.json(data);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        return next(e);
    }
});
exports.default = router;
