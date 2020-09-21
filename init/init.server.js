const http = require('http');

module.exports = (app) => {
  const port = process.env.PORT || 5000;
  const server = http.createServer(app);

  server.listen(port);
  server.on('listening', () => console.log(`Server listening on port ${port}`));
};