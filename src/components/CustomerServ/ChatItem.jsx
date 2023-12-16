import React from "react";
import Avatar from "../CustomerServ/Avatar";

const ChatItem = (props) => {
  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{props.msg}</div>
        
      </div>
      <Avatar />
    </div>
  );
};

export default ChatItem;