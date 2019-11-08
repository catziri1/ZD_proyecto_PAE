module.exports = function(app) {
    app.route('/api/imagenes')
        .get((req, res) => {
            res.send('GET lista de imagenes');
        })
        .post((req, res) => {
            res.send('POST en lista de imagenes');
        });
    app.route('/api/imagenes/:id')
        .get((req, res) => {
            res.send('GET imagen en');
        })
        .put((req, res) => {
            res.send('PUT imagen-actualizar');
        })
        .delete((req, res)=> {
            res.send('PUT imagen-actualizar');
        });

} 