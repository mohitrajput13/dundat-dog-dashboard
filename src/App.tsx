import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "https://backend-54y5.onrender.com";

export default function App() {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(SERVER_URL, {
      transports: ["websocket", "polling"],
      secure: true,
      withCredentials: false,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 500,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      setSocketConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
      setSocketConnected(false);
    });

    socket.on("chat-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    socketRef.current.emit("chat-message", {
      text: input,
      from: "User",
      ts: new Date().toISOString(),
    });

    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>
        WebSocket Chat — {socketConnected ? "🟢 Connected" : "🔴 Disconnected"}
      </h2>

      <div
        style={{
          height: 300,
          border: "1px solid #ccc",
          padding: 10,
          overflowY: "scroll",
          marginBottom: 20,
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <b>{m.from}</b>: {m.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 10, width: "70%" }}
        placeholder="Type a message..."
      />

      <button onClick={sendMessage} style={{ padding: "10px 20px", marginLeft: 10 }}>
        Send
      </button>
    </div>
  );
}
