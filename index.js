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

  app.get('/somma', function (req, res) {
    let n1;
    let n2;
    n1 = req.query.n1;
    n2 = req.query.n2;
    let operator = parseInt(n1) + parseInt(n2);
    res.send('somma ' + operator);
  });

  app.get('/sottrazione', function (req, res) {
    let n1;
    let n2;
    n1 = req.query.n1;
    n2 = req.query.n2;
    let operator = n1 - n2;
    res.send('sottrazione' + operator);
  });

  app.get('/moltiplicazione', function (req, res) {
    let n1;
    let n2;
    n1 = req.query.n1;
    n2 = req.query.n2;
    let operator = n1 * n2;
    res.send('moltiplicazione' + operator);
  });

  app.get('/divisione', function (req, res) {
    let n1;
    let n2;
    n1 = req.query.n1;
    n2 = req.query.n2;
    let operator = n1 / n2;
    res.send('divisione' + operator);
  });
// tutto maiuscolo
  app.get('/upperCase', function (req, res) {
    let nome;
    nome = req.query.nome;
    var x = nome.toString().toUpperCase();
    res.send('ciao ' + x);
  });

app.listen(3000);

