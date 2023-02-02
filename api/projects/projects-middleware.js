const Project = require('../projects/projects-model');

module.exports = {
    validateProjectID,
    validateProjectInput
};

async function validateProjectID(req, res, next) {
    try {
        const project = await Project.get(req.params.id);
        if(!project) {
            res.status(404).json({ message: 'project not found' });
        } else {
            req.project = project;
            next()
        };
    } catch (err) {
        res.status(500).json({ message: 'there was a problem finding that project' });
    };
};

function validateProjectInput(req, res, next) {
    const { project_id, description, notes } = req.body;
    if(!project_id || !description || !description.trim() || description.length > 128 || !notes || !notes.trim()){
        res.status(400).json({ message: 'please provide a valid description and notes'});
    } else {
        req.description = description.trim();
        req.notes = notes.trim();
        next();
    }
};