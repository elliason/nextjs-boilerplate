import { join } from 'path';
import { format, parse } from 'url';
import compression from 'compression';
import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import NextI18NextInstance from '../utils/i18n';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();
    server.use(compression());
    server.use(nextI18NextMiddleware(NextI18NextInstance));

    // handle any requests
    server.get('*', (req, res) => {
        // const { pathname, query } = parse(req.url, true);
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on port ${port}`);
    });
})();
