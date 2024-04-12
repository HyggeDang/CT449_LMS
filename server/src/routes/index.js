const authRouter = require('./auth');
const nxbRouter = require('./nxb');
function route(app) {
    app.use('/auth', authRouter);
    app.use('/nxb', nxbRouter);
}
module.exports = route;
