// Ici, j'ai import du frameword ExpressJs
// j' import express from "express";
const express = require ("express");

// je crée l'application ExpressJs
const app = express();

// Ici,je définit une route de type GET
app.get("/", (req, res) => {
    res.end("Bonjour, je suis le nouveau serveur");
}) ;

//je crée la route "/Bonjour" de type
// gére les requête GET vers