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
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const redditServices_1 = __importDefault(require("../services/redditServices"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('ping');
});
router.get('/:subreddit', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sub = req.params.subreddit;
        const index = Number(req.query.index);
        if (isNaN(index)) {
            const data = yield redditServices_1.default.getPosts(sub);
            return res.json(data);
        }
        const data = yield redditServices_1.default.getPosts(sub, index);
        return res.json(data);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        return next(e);
    }
}));
exports.default = router;
