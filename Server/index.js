const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();


const routes = require('./network/routes');

// static files
const files = path.join(__dirname, '../public');
app.use(express.static(files));

// config server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// iniciamos nuestro server de rutas
routes(app);

app.listen(3000, () => {
  console.log('La aplicacion esta corriendo en http://localhost:3000')
})