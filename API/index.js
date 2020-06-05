// importar modulos
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// iniciar express
const app = express();

// Configurar CORS
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whitelist.some(domain => domain === origin);
    if (exist) {
      callback(null, true);
    } else {
      callback(new Error('NO permitido por CORS'));
    }
  }
}

// Habilitar CORS
app.use(cors());

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//Habilitar archivos json cuando se soliciten metodos 'POST' o 'PUT'
app.use(express.json());

// Middlewares: Routes
app.use(require('./routes'));

// Variables
app.set('port', process.env.PORT || 4000);

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`);
});