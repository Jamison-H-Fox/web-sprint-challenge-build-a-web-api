const server = require('./api/server.js');
require('dotenv').config()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 9000;

server.listen(PORT, hostname, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(`Server listening on http://${hostname}:${PORT}`)
})