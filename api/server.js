const express = require('express');
const server = express();
server.use(express.json());

const {  } = require('./projects/projects-middleware');
const projectsRouter = require('./projects/projects-router');
server.use('/api/projects', projectsRouter);

const {  } = require('./actions/actions-middlware');
const actionsRouter = require('./actions/actions-router');
server.use('/api/actions', actionsRouter);

server.get('/api', (req, res) => {
    res.status(200).json({
        message: 'it bout to get krunk up in dis bitch.'
    })
})

module.exports = server;
