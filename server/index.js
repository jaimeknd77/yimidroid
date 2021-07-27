const express = require('express');
const morgan = require('morgan');

const commands = require('./commands/command.activation');
exports.commands = commands;

const timers = require('./timers/timer.activation');
exports.timers = timers;

const bot = require('./bot');


const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('commands', commands);
app.set('timers', timers);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes/command.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})