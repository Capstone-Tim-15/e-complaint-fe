import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const ChatList = () => {
  const [chatList, setChatList] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    fetch('https://655422dd63cafc694fe62bc5.mockapi.io/listchat/chatlist')
      .then(response => response.json())
      .then(data => setChatList(data.slice(0, 7)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const styleButton = {
    position: 'fixed',
    bottom: 10,
    right: 10,
    borderRadius: '50%',
    width: '80px', 
    height: '80px', 
    fontSize: '14px',
    backgroundColor: 'gray',
  };

  return (
    <div>
      <h1>chat list enduser</h1>
      
      {chatList.map(chat => (
        <Card key={chat.id} style={{ width: '18rem', marginBottom: '10px' }}>
          <Card.Body>
            <Card.Title>{chat.sender}</Card.Title>
          </Card.Body>
        </Card>
      ))}
        <Button style={{ ...styleButton }} onClick={toggleChatbot}>
            tanya
        </Button>

    </div>
  );
};

export default ChatList;
