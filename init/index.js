require('./init.env');
require('./init.database');
const app = require('./init.app');
require('./init.server')(app);