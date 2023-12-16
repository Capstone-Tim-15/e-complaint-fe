import React, { useState, useRef, useEffect } from "react";
import "../CustomerServ/ChatContent.css";
import ChatItem from "../CustomerServ/ChatItem";

const ChatContent = () => {
  const messagesEndRef = useRef(null);
  const [chat, setChat] = useState([

    {
      key: 1,
      type: "date",
      date: new Date().toLocaleDateString(),
    },
    {
      key: 2,
      type: "other",
      msg: "ini endUser. <br> Halo, saya mau mengajukan keluhan mengenai pelayanan RSUD Embung Fatimah. Apakah saya bisa menuliskan keluhan disini atau harus ke website RS yang bersangkutan?",
    },
    {
      key: 3,
      type: "",
      msg: "ini admin. <br> Halo, Terima kasih telah menggunakan layanan Gov-Complaint! Terkait permasalahan yang anda tanyakan, sehubung dengan RSUD Embung Fatimah merupakan RS milik Pemerintah, anda dapat menuliskan kritik dan saran melalui aplikasi Gov-Complaint dengan memilih kategori 'Pelayanan'.",
    },
    
  ]);

  const [msg, setMsg] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        if (msg.trim() !== "") {
          setChat((prevChat) => [
            ...prevChat,
            {
              key: prevChat.length + 1,
              type: "",
              msg: msg,
            },
          ]);
          scrollToBottom();
          setMsg("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    scrollToBottom();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [msg]);

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            
            <p>Customer Service</p>
          </div>
        </div>
      </div>

      <div className="content__body">
        <div className="chat__items mt-3">
          {chat.map((itm, index) => (
            <React.Fragment key={itm.key}>
              {itm.type === "date" && (
                <div className="chat-date">{itm.date}</div>
              )}
              
              {itm.image && (
                <img
                  src={itm.image}
                  alt="User"
                />
              )}
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
              />
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="content__footer">
        <div className="sendNewMessage">
          
          <input
            type="text"
            placeholder="Kirim pesan"
            onChange={onStateChange}
            value={msg}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;