'use strict'

var express = require("express");
let indexRouter = require('./routes/index');

let imagenes = require('./routes/imagenes');
let usuarios = require('./routes/usuarios');
let publicaciones = require('./routes/publicaciones');
let emisiones = require('./routes/emisiones');

var app = express();
const port = 3000;

app.listen(port);

app.use('/', indexRouter);

imagenes(app);
publicaciones(app);
usuarios(app);
emisiones(app);

app.use(function(req, res, next) {
    res.writeHead(404);
    res.end();
});
