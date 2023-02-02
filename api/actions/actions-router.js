const express = require('express');
const {
    validateActionID,
    validateActionInput,
    validateProjectID,
} = require('./actions-middlware');

const router = express.Router();

const Action = require('./actions-model');

router.get('/', (req, res, next) => {
    Action.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(next)
});

router.get('/:id', validateActionID, (req, res, next) => {
    Action.get(req.params.id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(next)
});

router.post('/', validateProjectID, validateActionInput, (req, res, next) => {
    Action.insert({
        description: req.body.description,
        notes: req.body.notes,
        project_id: req.body.project_id,
    })
        .then(newAction => {
            res.status(201).json(newAction);
        })
        .catch(next)
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