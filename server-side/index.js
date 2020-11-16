//`use strict`;
//commented stuff is for google app engine
/*const app = require('express')();
app.set('view engine','pug');
const server = require('http').Server(app);
*/
const io = require("socket.io")(server);
/*app.get('/',(req,res)=>{
  res.render('index.pug')
})*/

let timerValues = {};
let intervals = {};
io.on("connection", (socket) => {
  socket.on("CREATE_ROOM", (state) => {
    let roomName = Math.random().toString(36).substr(2, 5).toUpperCase();
    while (io.sockets.adapter.rooms[roomName]) {
      //generate new roomname if a roomname already exists
      roomName = Math.random().toString(36).substr(2, 5).toUpperCase();
    }
    console.log(state);
    console.log(roomName);
    socket.join(roomName);
    socket.emit("UPDATE_STATE", {
      ...state,
      roomName: roomName,
      gameState: "WAITING",
    });
  });

  socket.on("JOIN_ROOM", (roomName) => {
    if (io.sockets.adapter.rooms[roomName.toUpperCase()]) {
      socket.join(roomName.toUpperCase());
      getFirstInRoom(roomName.toUpperCase()).emit("JOIN_ROOM");
    } else {
      socket.emit("ROOM_ERROR");
    }
  });

  socket.on("UPDATE_STATE", (state) => {
    io.sockets.in(state.roomName).emit("UPDATE_STATE", state);
  });

  socket.on("START_TIMER", (roomName) => {
    if (!intervals[roomName]) {
      timerValues = { ...timerValues, [roomName]: 60 };
      intervals = {
        ...intervals,
        [roomName]: setInterval(function () {
          if (timerValues[roomName] < 0) {
            delete timerValues[roomName];
            clearInterval(intervals[roomName]);
            delete intervals[roomName];
            io.sockets.in(roomName).emit("TIMER_DONE");
          }
          io.sockets.in(roomName).emit("UPDATE_TIME", timerValues[roomName]);
          timerValues = {
            ...timerValues,
            [roomName]: timerValues[roomName] - 1,
          };
        }, 1000),
      };
    } else {
      timerValues = { ...timerValues, [roomName]: 60 };
    }
  });
  socket.on("STOP_TIMER", (roomName) => {
    if (intervals[roomName]) {
      delete timerValues[roomName];
      clearInterval(intervals[roomName]);
      delete intervals[roomName];
    }
  });

  function getFirstInRoom(roomName) {
    return io.sockets.sockets[
      Object.keys(io.sockets.in(roomName).adapter.rooms[roomName].sockets)[0]
    ];
  }
});
/*
if (module === require.main){
  const PORT = process.env.PORT || 8080;
  server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
  })
}
module.exports = server
*/