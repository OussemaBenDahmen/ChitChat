import socketIo from "socket.io-client";
import { ServerURI } from "../services/config";

export const socket = socketIo(ServerURI, { withCredentials: true });

export const SendMessageSocket = (payload) => {
  socket.emit("SendMessage", payload);
};

export const SendGroupeMessage = (payload) => {
  socket.emit("GroupeMessage", payload);
};

export const TypingSocket = (payload) => {
  socket.emit("Typing", payload);
};

export const UpdateSocket = (payload) => {
  socket.emit("Update", payload);
};

export const GetConversationSocket = (payload) => {
  socket.emit("GetConversation", payload);
};
