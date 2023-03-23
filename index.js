const axios = require('axios');
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

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
    res.send(JSON.stringify(req.query.a -(- req.query.b)));
  });

  app.get('/sottrazione', function (req, res) {
    res.send(JSON.stringify(req.query.a - req.query.b));
  });

  app.get('/moltiplicazione', function (req, res) {
    res.send(JSON.stringify(req.query.a * req.query.b));
  });

  app.get('/divisione', function (req, res) {
    res.send(JSON.stringify(req.query.a / req.query.b));
  });
// tutto maiuscolo
  app.get('/upperCase', function (req, res) {
    let nome;
    nome = req.query.nome;
    var x = nome.toString().toUpperCase();
    res.send('ciao ' + x);
  });

  app.get('/meteo', function (req, res) {
    // res.send("coordinate " +req.query.lat + " "+ req.query.lon);
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+
    req.query.lat+
    "&lon="+
    req.query.lon+
    "&appid=1c7ba3c288da024c7ab46f2f38e24015" )
    .then(function(response){
      res.send(response.data.weather[0].description);
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  });


app.listen(3000);

