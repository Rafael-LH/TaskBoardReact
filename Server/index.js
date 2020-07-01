const path = require('path');
const express = require('express');
// const cors = require('cors');
const app = express();

const router = require('./network/routes');

// Conexion with db
const db = require('./config/db');
db();

// static files
const files = path.resolve(__dirname, '../dist');
app.use(express.static(files));

// config server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'dist' })
})

// iniciamos nuestro server de rutas
router(app);

app.listen(3000, () => {
  console.log('La aplicacion esta corriendo en http://localhost:3000')
})