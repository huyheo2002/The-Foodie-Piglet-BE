const socketIo = require("socket.io");

import * as chatController from "../controllers/chatController";

const initSocket = (server) => {
    let io;
    io = socketIo(server, {
        cors: {
            origin: process.env.URL_CLIENT || "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
        },
        pingTimeout: 30000
    });

    io.use((socket, next) => {
        const origin = socket.handshake.headers.origin;
        if (origin === process.env.URL_CLIENT || origin === "http://localhost:3000") {
            return next();
        }
        return next(new Error("Not allowed by CORS"));
    });

    if (!io._connectionInitialized) {
        io._connectionInitialized = true;

        const checkConnect = getIo(io);

        if (checkConnect) {
            // Khi có kết nối mới từ client
            io.on("connection", (socket) => {
                handleConnection(socket);

                // Gửi tin nhắn mới vào 1 nhóm
                socket.on("newMessage", async (data) => {
                    console.log("send message success", data);
                    try {
                        // Xử lý tin nhắn và lưu vào cơ sở dữ liệu
                        let message = await chatController.handleCreateMessageSocket(data);
                        console.log("message socket", message);
                        if (message && message.errCode === 0) {
                            // Gửi tin nhắn mới đến tất cả client khác
                            io.emit("newMessage", message);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                });

                // thu hồi tin nhắn
                socket.on("recallMessage", async (id) => {
                    console.log("recall message success", id);
                    try {
                        // Xử lý tin nhắn và lưu vào cơ sở dữ liệu
                        let message = await chatController.handleRecallMessageSocket(id);
                        console.log("message recall socket", message);
                        if (message) {
                            // Gửi tin nhắn mới đến tất cả client khác
                            io.emit("recallMessage", message);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                });

                // // xóa tin nhắn 
                socket.on("deleteMessage", async (id) => {
                    console.log("delete message success", id);
                    try {
                        // Xử lý tin nhắn và lưu vào cơ sở dữ liệu
                        let message = await chatController.handleDeleteMessageSocket(id);
                        console.log("message socket", message);
                        if (message) {
                            // Gửi tin nhắn mới đến tất cả client khác
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
}

const handleConnection = (socket) => {
    console.log("Client connected: " + socket.id);

    // Gửi thông báo đến client mới kết nối
    socket.emit("serverMessage", "Welcome to the chat!");

    // Gửi thông báo đến tất cả client khác về người dùng mới kết nối
    socket.broadcast.emit("serverMessage", "A new user has joined the chat.");
};

const handleDisconnect = (socket) => {
    console.log("Client disconnected: " + socket.id);

    // Gửi thông báo đến tất cả client khác về người dùng đã ngắt kết nối
    socket.broadcast.emit("serverMessage", "A user has left the chat.");
};

const getIo = (io) => {
    if (io && io.engine && io.engine.clientsCount >= 0) {
        return io;
    }
    throw new Error("Socket.IO not initialized or no active connections!");
}

module.exports = {
    initSocket: initSocket,
    getIo: getIo,
};
