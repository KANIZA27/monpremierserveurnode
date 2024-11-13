// Ici, j'importer le protocoé le http.
// Ici, le require() permet d'importer le package,
// Ici, le package import est http.
// avant de convertir en ES, j'avais écrit :
// const http = require("http"); => code selon ES6 (avant 2015).
import { createServer } from "http";// co dage selon ES6 (2015)



// Ici je déclare le serveur en utilisant http.
// const server = http.createServer((req,res) => {});
// je crée le serveur selon la recommandation ES6.
const server1 = createServer(app);


 const server = createServer((req, res) => {
    // pourvoir retourné la réponse, je renvoie au client le message "Bonjour ..."
    // pour renvoie le message de réponse,"res" utilise la méthode "end()".
    res.end("Bonjour, je suis le serveur.");

});

// Ici, le serveur est disponible sur le port 3000.
server.listen(3000);

/* Ici, je vais lancer le server sur GitBash,est j'exécuté la commande "node server".
sur le navigateur web, je vais tapez "localhost:3000".
qui signifie le serveur en local,
c'est-à-dire dans chaque ordinateur, nodeJS crée un server local
et le serveur en local exposé au port 3000
*/

/* ==== En résumé ====
1. le projet Node est initialisé avec la commande "npm init"
2. un serveur Node basique est lancé grâce 
à la méthode createServer venant du package http "http.createServer()"
les paramétres "req" et "res" sont obligatoire pour sreateServer().
"res" signifie la réponse retournée par le serveur.
exemple, ici, le serveur retourné le méssage "Bonjour, je suis le serveur."
et grâce au code res.end("Bonjour,je suis le serveur")

*/



