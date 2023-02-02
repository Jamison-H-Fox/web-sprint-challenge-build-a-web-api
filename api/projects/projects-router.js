const express = require('express');
const {
    validateProjectID,
    validateProjectInput,
} = require('./projects-middleware');

const router = express.Router();

const Project = require('./projects-model');

router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.get('/:id', validateProjectID, (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.post('/', validateProjectInput, (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.put('/:id', validateProjectID, validateProjectInput, (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.delete('/:id', validateProjectID, (req, res, next) => {
    res.status(200).json({ message: 'we gotta build this out still tho' })
});

router.get('/:id/actions', validateProjectID, (req, res, next) => {
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