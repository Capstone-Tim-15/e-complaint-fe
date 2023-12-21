import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import axios from "axios";
import "../styles/ChatList.css";
import FaqButton from "../components/FaqButton";

const ChatList = () => {
  const [chatList, setChatList] = useState([]);

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://655422dd63cafc694fe62bc5.mockapi.io/listchat/listchat")
      .then((response) => setChatList(response.data.slice(0, 7)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
                <div class="col-lg-10">
                    <div className="col-lg-6">
                      <h1 className="text1 ms-4 mb-3">Chat</h1>
                    </div>
                    <div className="mt-2">
                    <div className="chat-list-container">
                      {chatList?.map((chat) => (
                        <Card key={chat.id} border={false}>
                          <Card.Body className="list-chat">
                            <div>
                              <img
                                src={chat.profile}
                                alt="Profile"
                                style={{
                                  width: "55px",
                                  height: "55px",
                                  borderRadius: "100px",
                                }}
                              />
                            </div>
                            <Card.Title>{chat.sender}</Card.Title>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                    <FaqButton />
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

export default ChatList;
