import JsonServer from 'json-server';

const server = JsonServer.create();
const router = JsonServer.router('db.json');
const middlewares = JsonServer.defaults();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', '*')
    next()
});
server.use(middlewares);
server.use(router);

server.listen('8000', () => {
    console.log(`JSON Server is running on port 8000`);
});
