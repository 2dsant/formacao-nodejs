import http from 'node:http';
import { json } from './middlewares/json.js';


const server = http.createServer(async (req, res) => {
    await json(req, res);

    const route = routes.find(route => route.method === req.method && route.path === req.url);

    if (route) {
        return route.handler(req, res);
    }
});

server.listen(3333);