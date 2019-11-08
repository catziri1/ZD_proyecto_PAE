module.exports = function(app) {
    app.route('/api/usuarios')
        .get((req, res) => {
            res.send('GET lista de usuarios');
        })
        .post((req, res) => {
            res.send('POST en lista de usuarios');
        });
    app.route('/api/usuarios/:id')
        .get((req, res) => {
            res.send('GET usuario en');
        })
        .put((req, res) => {
            res.send('PUT usuario-actualizar');
        })
        .delete((req, res)=> {
            res.send('PUT usuario-actualizar');
        });

} 
