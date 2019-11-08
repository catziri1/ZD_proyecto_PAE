module.exports = function(app) {
    app.route('/api/publicaciones')
        .get((req, res) => {
            res.send('GET lista de publicaciones');
        })
        .post((req, res) => {
            res.send('POST en lista de publicaciones');
        });
    app.route('/api/publicaciones/:id')
        .get((req, res) => {
            res.send('GET publicacion en'+id);
        })
        .put((req, res) => {
            res.send('PUT publicacion-actualizar');
        })
        .delete((req, res)=> {
            res.send('PUT publicacion-actualizar');
        });

}