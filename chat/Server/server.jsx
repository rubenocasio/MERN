const port = 8000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require("socket.io")(server);

let totalConnections = 0;
const socketUserTable = {};

io.on("connect", (socket) => {
    totalConnections++;
    console.log(`New user connected. ${totalConnections} users connected.`);

    socket.on("join", (username) => {
    socketUserTable[socket.id] = { username, isTyping: false };

    // send a message from "System" to announce new user joining chat
    const joinMsg = {
        content: `${username} has joined.`,
        date: new Date(),
        author: { name: "System" },
        };

    io.emit("roomInfo", { users: Object.values(socketUserTable) });
    io.emit("message", joinMsg);
    });

    socket.on("sendMessage", (msg) => {
    // send message to all sockets
    io.emit("message", msg);
    });

    socket.on("isTyping", (isTyping) => {
    socketUserTable[socket.id].isTyping = isTyping;
    io.emit("roomInfo", { users: Object.values(socketUserTable) });
    });

    socket.on("disconnect", () => {
    totalConnections--;
    console.log(`user disconnected. ${totalConnections} users connected.`);

    if (socketUserTable.hasOwnProperty(socket.id)) {
        const leaveMessage = {
            content: `${socketUserTable[socket.id].username} has left.`,
            date: new Date(),
            author: { name: "System" },
        };

        delete socketUserTable[socket.id];

        io.emit("message", leaveMessage);
        io.emit("roomInfo", { users: Object.values(socketUserTable) });
        }
    });
});