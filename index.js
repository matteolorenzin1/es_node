const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/nome', function (req, res) {
    res.send('ciao ')
  });
  
  app.get('/mioNome', function (req, res) {
    let nome;
    nome = req.query.nome;
    res.send('ciao ' + nome);
  });

app.listen(3000);

