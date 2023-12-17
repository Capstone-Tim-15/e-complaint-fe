import { Icon } from "@iconify/react";
import styled from "styled-components";
import gambar from "../../assets/delete-Icon.png"
import { Row, Col } from "react-bootstrap";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import './css/detail.css';
import image from "../../assets/profile.jpg"
import image1 from "../../assets/Mountain.jpeg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import defaultProfil from "../../images/defaultProfil.jpeg";
import imageDefault from "../../assets/imageDefault.png"

export default function DetailComplaint() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const { token } = useAuth();
  const imageProfile = complaint?.photoImage || defaultProfil;
  const [newMessage, setNewMessage] = useState("")
  const descriptionImage = `https://res.cloudinary.com/dua3iphs9/image/upload/v1700572036/${complaint && complaint.imageUrl}`;
  console.log(descriptionImage,'l')
  const imageDes = descriptionImage || imageDefault;

  const fetchDataDetail = async () => {
    try {
      const response = await axios.get(`https://api.govcomplain.my.id/admin/complaint/search?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(response);
      setComplaint(response.data.results);
    } catch (error) {
      console.error('error fetching data', error);
    }
  }

  useEffect(() => {
    fetchDataDetail();
  }, []);

  const handleSubmitChat = async () => {
    if (newMessage.trim() === "") {
      return;
    }
    try {
      await axios.post("https://api.govcomplain.my.id/admin/comment", {
        complaintId: id,
        role: "admin",
        message: newMessage,
        fullname: complaint?.name,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchDataDetail();

      setNewMessage("");
    } catch (error) {
      console.error("error sending message", error);
    }
  }
  return (
    <div className="row">
      <div className="col-lg-12">
        <Topbar />
      </div>
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <div className="header-detail">
            <div className="title-detail">
              <h2>Detail Complaint</h2>
            </div>
            <div className="menu-title">
              <div className="lingkungan">
                <h4>{complaint && complaint.category}</h4>
              </div>
              {/* <div className="date">
                <h4>23/10/2023</h4>
              </div> */}
              <div className="category-status" style={{ backgroundColor: complaint && complaint.status === "SEND" ? "#0EAE00 " : "#FFC700" }}>
                <h4>{complaint && complaint.status}</h4>
              </div>
            </div>
          </div>
          <div className="menu-detail">
            <div className="profile-detail">
              <h6 className="by">By</h6>
              <img src={imageProfile} alt="profile" />
              <h6>{complaint && complaint.name}</h6>
            </div>
            <div className="content-detail">
              <div className="left">
                <img src={imageDes} alt="image-detail"/>
                <h6>Deskripsi</h6>
                <div className="card card-deskripsi">
                  <p>{complaint && complaint.content}</p>
                </div>
              </div>
              <div className="right">
                <div className="card card-chat">
                  {complaint && complaint.comment && complaint.comment.length > 0 ? (
                    complaint.comment.map(comment => (
                      <div className="section-chat" key={comment.id}>
                        {comment.role === 'admin' ? (
                          <div className="menu-chat" >
                            <div className="card chat-balon-admin">
                              <div className="header-title">
                                <h6 className="username fw-bold">{comment.role}</h6>
                                <h6 className="time"></h6>
                              </div>
                              <p className="text-chat">
                                {comment.message}
                              </p>
                            </div>
                            <img src={imageProfile} alt="profile-chat" className="profile-chat" />
                          </div>
                        ) : (
                          <div className="menu-chat-user">
                            <img src={imageProfile} alt="profile-chat" className="profile-chat" />
                            <div className="card chat-balon-user">
                              <div className="header-title">
                                <h6 className="username fw-bold">{comment.role}</h6>
                                <h6 className="time"></h6>
                              </div>
                              <p className="text-chat">{comment.message}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="comment-null">
                      <p>Tidak ada komentar</p>
                    </div>
                  )}
                </div>
                <div className="section-input">
                  <input type="text"
                    className="input-chat"
                    placeholder="Tambahkan komentar"
                    style={{ height: "auto", overflow: "hidden" }} rows={1}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)} 
                    />
                  <button type="submit" className="button-chat" onClick={handleSubmitChat}>
                    <Icon icon="material-symbols-light:send" color="rgba(0, 0, 0, 0.25098039215686274)" className="icon-button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
