var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
var db = require('../src/models/dao/projetosDAO');
var uri = 'mongodb+srv://larissa:mnbvcxz@cluster0.kzuraxn.mongodb.net/?retryWrites=true&w=majority';



router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Página de historia' });
});


/* POST home page. */
router.post('/', async function(req, res, next) {
  const client = new MongoClient(uri);

  const form = req.body;
  const form_data = 
    {
      nome: form.nome,
      texto: form.texto,
      rota: form.rota,
      
    }
  console.log(form_data)
  try {
    await client.connect();
    const results = await db.insertProjeto(client, form_data);
    res.render('admin', { title: 'admin', results: results });
  } catch (err) {
    res.send(err);
  } finally {
    await client.close()
  }
});

module.exports = router;