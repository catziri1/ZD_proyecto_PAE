let express = require('express');
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

module.exports = router;