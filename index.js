const next = require('next');
const http = require('http');
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.1.6.93';
app.prepare().then(() => {
    http.createServer((req, res) => {
        handle(req, res);
    }).listen(PORT, HOST, () => {
        console.log(`Server ready on http://${HOST}:${PORT}`);
    });
});