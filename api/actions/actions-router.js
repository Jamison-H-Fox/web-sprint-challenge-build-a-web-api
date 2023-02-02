const express = require('express');
const {
    validateActionID,
    validateActionInput
} = require('./actions-middlware');

const router = express.Router();

const Action = require('./actions-model');

router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'we still gotta build dis shit out'})
});

router.get('/:id', validateActionID, (req, res, next) => {
    res.status(200).json({ message: 'we still gotta build dis shit out'})
});

router.post('/', validateActionInput, (req, res, next) => {
    res.status(200).json({ message: 'we still gotta build dis shit out'})
});

router.put('/:id', validateActionID, validateActionInput, (req, res, next) => {
    res.status(200).json({ message: 'we still gotta build dis shit out'})
});

router.delete('/:id', validateActionID, (req, res, next) => {
    res.status(200).json({ message: 'we still gotta build dis shit out'})
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'Something went wrong in the actions-router',
        message: err.message,
        stack: err.stack
    })
});

module.exports = router;