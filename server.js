// Ici, j'importer le protocole http.
const http = require('http');


// Ici je déclare le serveur en utilisant http.
const server = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur.");

});

// Ici, le serveur est disponible sur le port 3000.
server.listen(3000);