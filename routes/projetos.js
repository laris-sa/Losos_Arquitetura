//routes/projetos.js
var express = require('express');
var router = express.Router();
var db = require('../src/models/dao/projetosDAO');
var { MongoClient, ObjectId } = require('mongodb');
var uri = 'mongodb+srv://larissa:mnbvcxz@cluster0.kzuraxn.mongodb.net/?retryWrites=true&w=majority';

//mostrar todos os projetos
router.get('/', async function(req, res, next) {
  var client = new MongoClient(uri);
  await client.connect();
  console.log("Conectado ao Banco de Dados");
  var projetos = await db.getProjetos(client);
  await client.close();
  res.render('projetos', {projetos: projetos});
});

//monstrar os dados de cada projeto pela rota
router.get('/:rota', async function(req, res, next) {
  var client = new MongoClient(uri);
  await client.connect();
  try {
    var projeto = await db.getProjetoByRota(client, req.params.rota);
    res.render('casa', projeto);
  } catch (err) {
    console.log(err);
    next(err);
  } finally {
    await client.close();
  }
});


module.exports = router;