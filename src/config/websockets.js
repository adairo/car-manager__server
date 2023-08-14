import { Server } from "socket.io";

let io;

export function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      preflightContinue: false,
      credentials: true,
      methods: "OPTIONS, GET, POST, PATCH, DELETE",
    },
  });

  io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

export function getSocketInstance() {
  if (!io) {
    throw new Error("Socket instance not initialized");
  }

  return io;
}
