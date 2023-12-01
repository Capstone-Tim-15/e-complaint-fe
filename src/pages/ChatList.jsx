import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/ChatList.css';

const ChatList = () => {
  const [chatList, setChatList] = useState([]);
  const [showChatUser, setShowChatUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    axios.get('https://655422dd63cafc694fe62bc5.mockapi.io/listchat/listchat')
      .then(response => setChatList(response.data.slice(0, 7)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleChatUser = () => {
    setShowChatUser(!showChatUser);
  };

  const styleButton = {
    position: 'fixed',
    bottom: 10,
    right: 10,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '20px',
    background: 'url(help.png)',
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
            <div>
              <h1 className="chat">Chat</h1>

              <div className="chat-list-container">
                {chatList?.map((chat) => (
                  <Card
                    key={chat.id}
                  >
                    <Card.Body>
                      <div>
                        <img
                          src="{profile}"
                          alt="Profile"
                          style={{ width: '55px', height: '55px', borderRadius: '100px' }}
                        />
                      </div>  
                      <Card.Title>{chat.sender}</Card.Title>
                    </Card.Body>
                  </Card>
                ))}
              </div>
              <Button style={styleButton}>
                ?
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ChatList;
