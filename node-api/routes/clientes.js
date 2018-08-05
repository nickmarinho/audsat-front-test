var express = require('express');
var router = express.Router();
var fs = require('fs');
var bcrypt = require('bcryptjs');
var clientesDbFile = 'db/clientes.json';

router.get('/', function(req, res) {
  var clientesData = fs.readFileSync(clientesDbFile, 'utf8') ? JSON.parse(fs.readFileSync(clientesDbFile, 'utf8')) : [];
  res.send(clientesData);

  let message = 'Listing all clientes';
  console.log(message);
});

router.get('/:page', function(req, res) {
  var clientes = fs.readFileSync(clientesDbFile, 'utf8') ? JSON.parse(fs.readFileSync(clientesDbFile, 'utf8')) : [];

  var totalclientes = clientes.length,
      pageSize = 5,
      pageCount = totalclientes/pageSize,
      currentPage = req.params.page ? Number(req.params.page) : 1,
      clientesArrays = [], 
      clientesList = [];

  //split list into groups
  while (clientes.length > 0) {
    clientesArrays.push(clientes.splice(0, pageSize));
  }

  //show list of clientes from group
  clientesList = clientesArrays[Number(currentPage) - 1];
  
  res.send(clientesList);

  let message = 'Listing page: ' + currentPage + ' of clientes';
  console.log(message);
});

router.get('/:clienteId', function(req, res) {
  var clientesData = fs.readFileSync(clientesDbFile, 'utf8') ? JSON.parse(fs.readFileSync(clientesDbFile, 'utf8')) : [];
  var clienteId = req.params.clienteId;

  for (var d = 0, len = clientesData.length; d < len; d += 1) {
    if (Number(clientesData[d].id) === Number(clienteId)) {
      res.send(clientesData[d]);

      let message = 'Reading a cliente by id: ' + clienteId;
      console.log(message);
    }
  }  
});

router.post('/', function(req, res) {
  var clientesData = fs.readFileSync(clientesDbFile, 'utf8') ? JSON.parse(fs.readFileSync(clientesDbFile, 'utf8')) : [];
  req.body.id = Number(clientesData.length) + 1;
  clientesData.push(req.body);
  fs.writeFileSync(clientesDbFile, JSON.stringify(clientesData) , 'utf-8');

  let message = 'Creating a cliente: ' + JSON.stringify(req.body);
  res.status(200).send({ success: true, message: message });
  console.log(message);
});

router.put('/:clienteId', function(req, res) {
  var clientesData = fs.readFileSync(clientesDbFile, 'utf8') ? JSON.parse(fs.readFileSync(clientesDbFile, 'utf8')) : [];
  var clienteId = req.params.clienteId;

  for (var d = 0, len = clientesData.length; d < len; d += 1) {
    if (clienteId.indexOf(clientesData[d].id) !== -1) {
      clientesData.splice(d, 1);
      clientesData.push(req.body);
      fs.writeFileSync(clientesDbFile, JSON.stringify(clientesData) , 'utf-8');
    }
  }

  let message = 'Updating a cliente id: ' + clienteId;
  res.status(200).send({ success: true, message: message });
  console.log(message);
});

router.delete('/:clienteId', function(req, res) {
  var clientesData = fs.readFileSync(clientesDbFile, 'utf8') ? JSON.parse(fs.readFileSync(clientesDbFile, 'utf8')) : [];
  var clienteId = req.params.clienteId;

  for (var d = 0, len = clientesData.length; d < len; d += 1) {
    if (clienteId.indexOf(clientesData[d].id) !== -1) {
      clientesData.splice(d, 1);
      fs.writeFileSync(clientesDbFile, JSON.stringify(clientesData) , 'utf-8');
    }
  }

  let message = 'Deleting a cliente by id: ' + clienteId;
  res.status(200).send({ success: true, message: message });
  console.log(message);
});

module.exports = router;
