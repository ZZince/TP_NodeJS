const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

let requestsCount = {};
let startTime = Date.now();

app.use((req, res, next) => {
    if (!requestsCount[req.path]) {
        requestsCount[req.path] = 0;
    }
    requestsCount[req.path]++;
    next();
});

app.get('/metrics', (req, res) => {
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    res.json({
        status: 'healthy',
        requestsCount: requestsCount,
        uptime: uptime
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/welcome', (req, res) => {
    res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle');
});

app.get('/secret', (req, res) => {
    res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète');
});

app.get('/error', (req, res) => {
    res.status(500).json({ message: 'An error occurred' });
});

app.get('/img', (req, res) => {
    res.sendFile(path.join(__dirname, '\\IMG\\IMG1.png'));
});

app.get('/redirectMe', (req, res) => {
    res.redirect('http://www.iut.fr');
});

app.get('/users/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Bienvenue sur la page de ${name}`);
});

app.get('/somme', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`La somme de ${a} et ${b} est ${sum}`);
});

app.use((req, res) => {
    res.status(404).send('Cette page n\'existe pas!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});