"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndpoint = (_req, res) => {
    return res.status(404).json({ error: 'unknown endpoint' });
};
const errorHandler = (error, _req, res, next) => {
    console.error(error.message);
    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' });
    }
    else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    }
    else if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({
            error: 'invalid token',
        });
    }
    else if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'token expired' });
    }
    return next(error);
};
exports.default = {
    unknownEndpoint,
    errorHandler,
};
