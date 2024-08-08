const http = require('http');
const app = require('./app.js');

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

async function startServer() {
    server.listen(PORT, () => {
        console.log(
            ` Server is up and running in ${process.env.NODE_ENV} mode. On port -> ${PORT} `
                .bgBlue.bold
        );
    });
}

startServer();
