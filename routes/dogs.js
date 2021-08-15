const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('You are in dogs APP')
})

router.get('/:id', (req, res) => {
    res.send('You are in dogs APP')
})

router.get('/:id/edit', (req, res) => {
    res.send('You are in dogs APP')
})

module.exports = router;


