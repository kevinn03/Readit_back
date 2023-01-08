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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
// get subreddit data
var getData = function (subreddit) { return __awaiter(void 0, void 0, void 0, function () {
    var result, data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get("https://www.reddit.com/r/".concat(subreddit, "/hot.json"))];
            case 1:
                result = _a.sent();
                data = result.data;
                return [2 /*return*/, data.data.children];
            case 2:
                e_1 = _a.sent();
                if (e_1 instanceof Error) {
                    console.error(e_1.message);
                }
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
// create posts from subreddit data
var getPosts = function (subreddit, index, end) {
    if (index === void 0) { index = 0; }
    if (end === void 0) { end = 2; }
    return __awaiter(void 0, void 0, void 0, function () {
        var resultArray, result, i, post, newObject, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    resultArray = [];
                    return [4 /*yield*/, getData(subreddit)];
                case 1:
                    result = _a.sent();
                    if (index < 0) {
                        index = 0;
                    }
                    if (end <= index) {
                        end = index + 2;
                    }
                    //gets post from index number to end non inclusive
                    for (i = index; i < end; i++) {
                        if (result) {
                            post = result[i].data;
                            newObject = {
                                title: post.title,
                                commentLink: "https://www.reddit.com".concat(post.permalink),
                                url: post.url,
                                date: post.created_utc,
                                image: '',
                                score: post.score,
                                comments: post.num_comments
                            };
                            if (post.preview) {
                                newObject.image = post.preview.images[0].source.url.replace('amp;', '');
                            }
                            resultArray.push(newObject);
                        }
                    }
                    return [2 /*return*/, resultArray];
                case 2:
                    e_2 = _a.sent();
                    if (e_2 instanceof Error) {
                        console.error(e_2.message);
                    }
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports["default"] = { getData: getData, getPosts: getPosts };
