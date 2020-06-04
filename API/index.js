// importar modulos
const express = require('express');
const mongoose = require('mongoose');

// iniciar express
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//Express json
app.use(express.json());

// Middlewares: Routes
app.use(require('./routes'));

// Variables
app.set('port', process.env.PORT || 4000);

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`);
});