import http from 'node:http';
import { json } from './middlewares/json.js';

const server = http.createServer(async (req, res) => {
    await json(req, res);

    console.log(body);

    return res.writeHead(201).end();
});

server.listen(3333);