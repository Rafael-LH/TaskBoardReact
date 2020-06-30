// server router
const task = require('../components/task/network');

function router(server) {
  server.use('/task', task);
}

module.exports = router;