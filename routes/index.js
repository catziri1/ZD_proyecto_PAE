let express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
    res.send('home');
});

router.get('/api', function(req, res) {
    res.send('api works');
});

router.get('/api/publicaciones', (req, res) => {
    res.send('GET lista de publicaciones');
});

router.post('/api/publicaciones', (req, res) => {
    res.send('POST en lista de publicaciones');
});

router.get('/api/publicaciones/:id', (req, res) => {
    res.send('GET publicacion');
})
router.put('/api/publicaciones/:id', (req, res) => {
    res.send('PUT publicacion-actualizar');
})
router.delete('/api/publicaciones/:id', (req, res) => {
    res.send('DELETE publicacion-actualizar');
});

module.exports = router;