/* let express = require('express');
let router = express.Router();

router.get('/api/publicaciones', (req, res) => {
    res.send('GET lista de publicaciones');
});
/*router.post('/api/publicaciones', (req, res) => {
    res.send('POST en lista de publicaciones');
});

router.get('/api/publicaciones/:id', (req, res) => {
    res.send('GET publicacion en' + id);
})
router.put('/api/publicaciones/:id', (req, res) => {
    res.send('PUT publicacion-actualizar');
})
router.delete('/api/publicaciones/:id', (req, res) => {
    res.send('DELETE publicacion-actualizar');
});*/

/* module.exports = router; */
 

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