const axios = require('axios');
const express = require('express');
const app = express();
var cors = require('cors');
var mysql = require('mysql');

require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

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


  app.get('/login', function (req, res) {
    var x;
    var connection = mysql.createConnection({
      host     : process.env.HOST,
      user     : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    });
  
    connection.connect();

    connection.query('SELECT nome, psw FROM utente', function (error, results, fields) {
      console.log( "error ", error );
      console.log("results", results );
      console.log("fields", fields );
      if (error) throw error;
      console.log('The solution is: ', results[0]);
      if (results[0].nome == req.query.nome && results[0].psw == req.query.psw)
      )
    });
     
    connection.end();
    res.send("I");
  });



app.listen(3000);

