const socketio = require('socket.io');
const AuctionRoom = require('../modules/roomsManagers/auctions.room.manager');


// eslint-disable-next-line func-style
const verifySocker = (_socket, next) => {

  next();
};

module.exports = server => {
  const io = socketio.listen(server, {
    path: '/auctions'
  });

  const auctions = io.of('/auctions');
  auctions.use(verifySocker).on('connection', async socket => {
    const { username, roomId, action, isScheduled } = socket.handshake.query;
    const room = new AuctionRoom({ io: auctions, socket, username, roomId, action, isScheduled });

    const roomCreated = await room.init(username);

    if (roomCreated) {
      if (action === 'create') {

      } else {

      }
    }

  });
  return io;
};