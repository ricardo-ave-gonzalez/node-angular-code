const router = require('express').Router();
const MongoInterface = require('../lib/MongoInterface');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { DBRef } = require('bson');

function User(email, password) {
  this.email = email;
  this.password = password;
}

router.get('/registrarse/:id', (request, response) => {
  console.log('ID:: ' + request.params.id);
  MongoInterface.query('tgi5', 'amigos', { id: request.params.id }, (err, resultado) => {
    response.setHeader('Content-Type', 'application/json');
    if (err) {
      response.status(500).end(JSON.stringify({ Error: 'Ha ocurrido un error interno.' }))
      return;
    }
    if (resultado.length < 1) {
      response.status(404).end(JSON.stringify(resultado));
      return;
    }
    response.status(200).end(JSON.stringify(resultado));

  })
});

router.get('/registrarse', (request, response) => {
  console.log('ID:: ' + request.params.id);
  MongoInterface.query('tgi5', 'amigos', { id: request.params.id }, (err, resultado) => {
    response.setHeader('Content-Type', 'application/json');
    if (err) {
      response.status(500).end(JSON.stringify({ Error: 'Ha ocurrido un error interno.' }))
      return;
    }
    if (resultado.length < 1) {
      response.status(404).end(JSON.stringify(resultado));
      return;
    }
    response.status(200).end(JSON.stringify(resultado));
  })
});

router.post('/registrarse', async (request, response) => {
  const { email, password } = request.body;
  const newUser = await new User({ email, password });
  MongoInterface.insert('tgi5', 'amigos', request.body, (err) => {
    response.setHeader('Content-Type', 'application/json');
    if (err) {
      response.status(500).end(JSON.stringify({ Error: 'Ha ocurrido un error interno.' }))
      return;
    }
    //response.status(201).end(JSON.stringify({ resultado: 'Usuario insertado.' }))
    response.status(200).json({ token });
  })
  await newUser.save();
  const token = await jwt.sign({ _id: newUser._id }, 'secretkey');
});

//NO FUNCIONA, en proceso...
router.post('/entrar', async (request, response) => {
  console.log(request.body)
  const { _id } = request.body;
  const user = { email, password } = request.body;
  MongoInterface.insert('tgi5', 'amigos', request.body, (err) => {
    response.setHeader('Content-Type', 'application/json');
    if (err) {
      response.status(500).end(JSON.stringify({ Error: 'Ha ocurrido un error interno.' }))
      return;
    }
    if (!user) return response.status(401).send(`El mail no existe`);
    if (user.password !== password) return response.status(401).send('La password es incorrecta');
    return response.status(200).json({ token });
  })
  const token = await jwt.sign({ _id: _id }, 'secretkey');
});

module.exports = router;

