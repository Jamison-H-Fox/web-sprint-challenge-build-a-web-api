const express = require('express');
const {

} = require('./projects-middleware');

const router = express.Router();

const Project = require('./projects-model');

router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.post('/', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.put('/:id', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.get('/:id/actions', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'Something happened in projects-router',
        message: err.message,
        stack: err.stack
    })
});

module.exports = router;