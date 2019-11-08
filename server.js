'use strict'

var express = require("express");
let indexRouter = require('./routes/index');
//let publicacionesRouter = require('./routes/publicaciones');

var app = express();
const port = 3000;

app.listen(port);

app.use('/', indexRouter);

//app.use('/api/publicaciones', publicacionesRouter);


app.use(function(req, res, next) {
    res.writeHead(404);
    res.end();
});
