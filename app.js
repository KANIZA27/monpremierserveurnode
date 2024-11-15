// Ici, j'ai import du frameword ExpressJs
// j'import express from "express";
const express = require ("express");

// je crée l'application ExpressJs
const app = express();

// Ici, le serveur il va retourne la réponse ci-dessous peu importe la requête
// qu'on va lui donnée c'est "même" la reponse par défaut.
/*app.use((req, res)=> {
    res.json({message : "Votre messsage a bien été reçu"});
});*/

// Ici, j'import l'application "app".
module.exports = app;


// Ici,je définit une route de type GET
// Ici, on gére les requête GET vers la page d'accueil
app.get("/", (req, res) => {
    res.end("Bonjour, je suis le nouveau serveur");
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
    res.end("Bienvenu dans notre page d'accuiel.");
// ici, il va gére les requête GET vers, qui va s'affichier "Bienvenu etc..".
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

app.put("/telephone", (req, res) => {
    res.end("voici notre numero de telephone");
});

app.delete("/Bonjour", (req, res) => {
    res.end("Bonjour bienvenu a notre page web");
});
