// server router
const task = require('../modules/task/network');

function router(server) {
  server.use('/task', task);
}

module.exports = router;