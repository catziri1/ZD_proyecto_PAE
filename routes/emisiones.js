module.exports = function(app) {
    app.route('/api/emisiones')
        .get((req, res) => {
            res.send('GET lista de emisiones');
        })
        .post((req, res) => {
            res.send('POST en lista de emisiones');
        });
    app.route('/api/emisiones/:id')
        .get((req, res) => {
            res.send('GET emision en');
        })
        .put((req, res) => {
            res.send('PUT emision-actualizar');
        })
        .delete((req, res)=> {
            res.send('PUT emision-actualizar');
        });

} 
