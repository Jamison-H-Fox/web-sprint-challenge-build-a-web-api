const Action = require('./actions-model');

module.exports = {
    validateActionID,
    validateActionInput
};

async function validateActionID(req, res, next) {
    try {
        const action = await Action.get(req.params.id);
        if(!action) {
            res.status(404).json({ message: 'action not found' })
        } else {
            req.action = action;
            next();
        };
    } catch (err) {
        res.status(500).json({ message: 'there was a problem finding that action' });
    };
};

function validateActionInput(req, res, next) {
    const { name, description } = req.body;
    if(!name || !name.trim() || !description || !description.trim()) {
        res.status(400).json({ message: 'please provide a valid name and description' });
    } else {
        req.name = name.trim();
        req.description = description.trim();
        next();
    }
};