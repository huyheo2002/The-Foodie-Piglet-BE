const socketIo = require("socket.io");

import * as chatController from "../controllers/chatController";

const initSocket = (server) => {
  let io;
  io = socketIo(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
    pingTimeout: 30000,
  });

  io.use((socket, next) => {
    const origin = socket.handshake.headers.origin;
    if (
      origin === process.env.URL_CLIENT ||
      origin === "http://localhost:3000"
    ) {
      return next();
    }
    return next(new Error("Not allowed by CORS"));
  });

  if (!io._connectionInitialized) {
    io._connectionInitialized = true;

    const checkConnect = getIo(io);

    if (checkConnect) {
      io.on("connection", (socket) => {
        handleConnection(socket);

        socket.on("newMessage", async (data) => {
          try {
            let message = await chatController.handleCreateMessageSocket(data);
            if (message && message.errCode === 0) {
              io.emit("newMessage", message);
            }
          } catch (error) {
            console.error(error);
          }
        });

        socket.on("recallMessage", async (id) => {
          console.log("recall message success", id);
          try {
            let message = await chatController.handleRecallMessageSocket(id);
            console.log("message recall socket", message);
            if (message) {
              io.emit("recallMessage", message);
            }
          } catch (error) {
            console.error(error);
          }
        });

        socket.on("deleteMessage", async (id) => {
          console.log("delete message success", id);
          try {
            let message = await chatController.handleDeleteMessageSocket(id);
            console.log("message socket", message);
            if (message) {
              io.emit("deleteMessage", message);
            }
          } catch (error) {
            console.error(error);
          }
        });

        socket.on("disconnect", () => {
          handleDisconnect(socket);
        });
      });
    }
  }
};

const handleConnection = (socket) => {
  socket.emit("serverMessage", "Welcome to the chat!");
  socket.broadcast.emit("serverMessage", "A new user has joined the chat.");
};

const handleDisconnect = (socket) => {
  socket.broadcast.emit("serverMessage", "A user has left the chat.");
};

const getIo = (io) => {
  if (io && io.engine && io.engine.clientsCount >= 0) {
    return io;
  }
  throw new Error("Socket.IO not initialized or no active connections!");
};

module.exports = {
  initSocket: initSocket,
  getIo: getIo,
};
