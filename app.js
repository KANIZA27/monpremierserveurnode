// Ici, j'ai import du frameword ExpressJs
// j'import express from "express";
const express = require ("express");
const url = require("url");
const fs = require("fs"); // le module 
// je crée l'application ExpressJs
const app = express();

// Ici, le serveur il va retourne la réponse ci-dessous peu importe la requête
// qu'on va lui donnée c'est "même" la reponse par défaut.
/* app.use((req, res)=> {
    res.json({message : "Votre messsage a bien été reçu"});
});*/

// Ici, j'import l'application "app".
module.exports = app;


// Ici,je définit une route de type GET
// Ici, on gére les requête GET vers la page d'accueil
app.get("/", (req, res) => {
    // je précise le type et l'encodage du contenu de la reponse et du contenu
    res.writeHead(200, {
        "Content-Type":"text/html;charset=utf-8"
    });
    // le contenu de la réponse retournée et qui s'affiche sur le navigateur
    res.write(" <b>Bonjour, je suis le nouveau serveur.</b> Je vie à Mayotte");
    res.end();// Fin de réponse retournée par le serveur
});

//je veux crée la route "/Bonjour" de type GET.
// qui va gére les requête GET vers le navigateur qui va s'affichier "Bonjour".
app.get("/", (req, res) => {
    res.end("hello, how are you")
});

// je veux crée un route "/cusine" de type GET
// qui va gére les requête GET vers, le navigateur qui va s'affichier "Cusine".
app.get("/cusine", (req, res) => {
    res.end(" Agnati bangani.");
});

// ici, je crée une route "/bangalo" de type GET
// pour voir une liste de bangalo.
app.get("/bangalo", (req, res) => {
    res.end("vous êtes dans le bangalo");
});



app.listen(3001, () =>{
    console.log("serveur écoute le port 3001");
});
 

// Ici, je crée un route "/accueil" de type GET.
app.get("/accueil", (req, res) => {
    fs.readFile("accueil.html", (err,data) => {
        // Traitement des erreures
        // 1. il ya des  erreurs, alors on affichie
        if(err) {
            res.writeHead(404);
            res.write("le fichie est introuvable.");
        }else{
            res.writeHead(200, {
                "content-type":"text/html"})
                res.write(data);
            
        }
    });
     res.end()// ici, il va gére les requête GET vers, qui va s'affichier "Bienvenu etc..".
});

// Ici, je crée une route en utilisant la méthode de type "GET".
app.get("/apropos", (req, res) => {
    res.end(" Vous etre bien a notre page de presentation");
    // et la je fait "res.end" pour affiché le méssage "vous etre bien etc.."
});

app.get("/services", (req, res) => {
    res.end("Nos services est les meilleurs du mode");
});

app.get("/contact", (req, res) => {
    res.end("A nous contact");
});


    // Ici, je crée une route en utilisant la méthode de type "POST"
app.post("/email", (req, res)=> {
    res.end("notre email");
     // ici, je fait "res.end" pour afficher le message "Notre email".
});

// Ici, je crée une route en utilisant la méthode de type "PUT"
app.put("/telephone", (req, res) => {
    res.end("voici notre numero de telephone");
    // Je fait "res.end" pour affichier le message "voici notre numero"
});

/*app.delete("/Bonjour", (req, res) => {
    res.end("Bonjour bienvenu a notre page web");
});*/

// Middleware 1
/*app.use((req, res, next) => {
    console.log("Akori, za yeto");
});

// Middleware 2
app.use((req, res) => {
    console.log("coucou, je suis la");
});*/

// === API ===
// format URL: localhost: 3002/api/nom
app.get("/api/nom", (req, res, next) => {
    const monObjet = [{
        nom: "Abdou",
        prenom: "Kamal",
    }];
    // je retourne l'objet "monObjet" sous format JSON et retourne le code 200
    res.status(200).json(monObjet);
});

// format URL : localhost:3002/api/url
app.get("/api/url", (req, res) => {
    // je retourne une réponse de HTML et de status 200
    res.writeHead(200, {'content-Type': 'text/html'});

    res.write(req.url); // je récupére l'URL passé dans la requête

    res.end(); // Fin de réponse
});

// format URL : localhost:3002/?annee=2024
/* https://lpo-chirongui.ac-mayotte.fr/
Analyse de l'URL :
l'url de base : https://www.google.com
l'url complet avec l'API '/search' : https://www.google.com/search
l'url complet avec des paramétres. 
Le mot-clé 'q' contient la valeur 'Chirongui' du paramétre.
les paramétres sont précédés par le point d'interrogation '?'
*/

// Ici, c'est la requête
// URL : localhost:3002/param?
app.get("/:param", (req, res) => {
    res.writeHead(200, {'Content_Type': 'text/html'});
    let param = req.query.annee;
    let param1 = req.query.mois;
    res.end(param1 + ":" + param);

    //let query = url.parse(req.url, true).query;
    //let =resultatAffiche = query.annee;
})
