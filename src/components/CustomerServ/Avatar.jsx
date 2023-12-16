import React from "react";
import "../CustomerServ/Avatar.css";


const Avatar = (props) => {
  return (
    <div className="avatar">
      {/* profile admin */}
      <div className="avatar-img">
        <img src={props.image} alt="#" />
      </div>
    
    </div>
  );
};

export default Avatar;