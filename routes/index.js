let express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
    res.send('home');
});

router.get('/api', function(req, res) {
    res.send('api works');
});

module.exports = router;