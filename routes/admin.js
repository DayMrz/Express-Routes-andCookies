const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next()
    }
    res.send("Sorry, not an Admin")
})

router.get('/topsecret', (req, res) => {
    res.send('this is top secret!')
})

router.get('/deleteeverything', (req, res) => {
    res.send('Ok, delete it!')
})

module.exports = router;