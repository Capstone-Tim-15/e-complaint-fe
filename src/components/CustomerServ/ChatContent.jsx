import React, { useState, useRef, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Topbar from "../Layout/Topbar";
import Sidebar from "../Layout/Sidebar";
import "../CustomerServ/ChatContent.css";
import ChatItem from "../CustomerServ/ChatItem";

const ChatContent = () => {
  const messagesEndRef = useRef(null);
  const [chat, setChat] = useState([

    {
      key: 1,
      type: "other",
      msg: "Halo, saya mau mengajukan keluhan mengenai pelayanan RSUD Embung Fatimah. Apakah saya bisa menuliskan keluhan disini atau harus ke website RS yang bersangkutan?",
    },
    {
      key: 2,
      type: "",
      msg: "Halo, Terima kasih telah menggunakan layanan Gov-Complaint! Terkait permasalahan yang anda tanyakan, sehubung dengan RSUD Embung Fatimah merupakan RS milik Pemerintah, anda dapat menuliskan kritik dan saran melalui aplikasi Gov-Complaint dengan memilih kategori 'Pelayanan'.",
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
    if (e.target && e.target.value) {
      setMsg(e.target.value);
    }
  };  

  return (
    <>
      <Row as="row">
        <Col lg="12">
          <Topbar />
        </Col>
        <Row as="row">
          <Col lg="2">
            <Sidebar />
          </Col>
          <Col lg="10">
            <div class="container">
              <div class="row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col text-center chat__header">
                    <h1 className="text-cs ms-4 mb-3">Customer Service</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="content__body">
                      <div className="chat__items mt-3">
                        {chat.map((itm, index) => (
                          <React.Fragment key={itm.key}>
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
                      <input
                          className="input_chat"
                          type="text"
                          placeholder="Kirim pesan"
                          onChange={onStateChange}
                          value={msg}
                          style={{ backgroundColor: 'transparent' }}
                      />
                      <button type="submit" className="button-chat">
                        
                      </button>    
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ChatContent;