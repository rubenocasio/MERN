import React, { useEffect, useState } from "react";
import "./App.css";

import io from "socket.io-client";
function App() {
  const [socket] = useState(() => io(":8000"));
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [joined, setJoined] = useState(false);
  const [roomInfo, setRoomInfo] = useState(null);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMsgs) => [...prevMsgs, msg]);
    });

    socket.on("roomInfo", (data) => setRoomInfo(data));

    /*
    Close the socket when this component is unmounted.
    Technically not needed for App.js since when this
    is unmounted it means the whole page is closed, but
    may be needed in other components if you want the
    connection to close when they navigate away from the
    component.
  */
    return () => {
      socket.disconnect(true);
    };
  }, []);

  function msgTimestamp(dateStr) {
    // When transferred between client and server the date object
    // is converted into a string, so we have to parse it back to a date object to work with it.
    const date = new Date(dateStr);
    const militaryHours = date.getHours();
    const hours = militaryHours > 12 ? militaryHours - 12 : militaryHours;
    const meridiem = militaryHours < 12 ? "am" : "pm";
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const year = date.getUTCFullYear();

    return `${hours}:${minutes}:${seconds} ${meridiem} ${month}/${day}/${year}`;
  }

  function joinLobby() {
    socket.emit("join", username);
    setJoined(true);
  }

  function sendMessage(e) {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", {
        content: message,
        date: new Date(),
        author: { name: username, id: socket.id },
      });

      setMessage("");
    }
  }

  function typing(e) {
    setMessage(e.target.value);
    socket.emit("isTyping", true);

    setTimeout(() => {
      socket.emit("isTyping", false);
    }, 2500);
  }

  return (
    <div>
      <div
        className={`justify-content-center ${joined ? "hidden" : "flex-row"}`}
      >
        <form onSubmit={(event) => event.preventDefault()}>
          {username.length < 2 && (
            <p style={{ color: "red" }}>
              Username must be at least 2 characters.
            </p>
          )}
          <label>Username: </label>
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button
            onClick={(event) => joinLobby()}
            disabled={username.length < 2}
          >
            Join Lobby
          </button>
        </form>
      </div>

      <div style={{ display: joined ? "block" : "none", padding: "30px 10%" }}>
        <div className="flex-row justify-content-space-evenly">
          <div className="pad-50-px">
            <h4>Users</h4>
            {roomInfo?.users?.map?.((user, i) => (
              <p key={i}>
                {user.username} {user.isTyping && <span>(typing...)</span>}
              </p>
            ))}
          </div>
          <div
            className="pad-50-px"
            style={{
              height: "60vh",
              overflowY: "scroll",
            }}
          >
            {messages.map((msg, i) => {
              return (
                <div key={i}>
                  <fieldset
                    style={{
                      display: "inline-block",
                      padding: 10,
                      borderRadius: 5,
                      backgroundColor:
                        msg.author.id === socket.id ? "lightgreen" : "azure",
                      boxShadow: "5px 5px 9px -4px rgba(0,0,0,0.75)",
                      borderWidth: 1,
                    }}
                  >
                    <legend>
                      <h5>
                        {msg.author.name} - {msgTimestamp(msg.date)}
                      </h5>
                    </legend>
                    <span>{msg.content}</span>
                  </fieldset>
                </div>
              );
            })}
          </div>
        </div>

        <form
          className="flex-row justify-content-center align-items-flex-end"
          onSubmit={sendMessage}
        >
          <textarea
            onChange={typing}
            value={message}
            placeholder="Reply..."
            cols="50"
            rows="10"
          ></textarea>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default App;
