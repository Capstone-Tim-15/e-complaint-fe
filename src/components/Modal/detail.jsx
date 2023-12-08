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

export default function DetailComplaint() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const { token } = useAuth();

  const fetchDataDetail = async () =>{
    try{
      const response = await axios.get(`https://api.govcomplain.my.id/admin/complaint/search?id=${id}`,{
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(response);
      setComplaint(response.data.results);
    } catch(error) {
      console.error('error fetching data', error);
    }
  }

  useEffect(()=>{
    fetchDataDetail();
  }, []);

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
              <div className="category-status" style={{ backgroundColor:complaint && complaint.status === "SEND" ? "#0EAE00 " : "#FFC700" }}>
                <h4>{complaint && complaint.status}</h4>
              </div>
            </div>
          </div>
          <div className="menu-detail">
            <div className="profile-detail">
              <h6 className="by">By</h6>
              <img src={image} alt="profile" />
              <h6>{complaint && complaint.name}</h6>
            </div>
            <div className="content-detail">
              <div className="left">
                <img src={image1} alt="image-detail" />
                <h6>Deskripsi</h6>
                <div className="card card-deskripsi">
                  <p>{complaint && complaint.content}</p>
                </div>
              </div>
              <div className="right">
                <div className="card card-chat">
                  <div className="section-chat">
                    <div className="menu-chat">
                      <div className="card chat-balon-admin">
                        <div className="header-title">
                          <h6 className="username">Arin Admin</h6>
                          <h6 className="time">2 jam</h6>
                        </div>
                        <p className="text-chat">
                          Halo! Terima kasih atas laporannya. Kami akan segera menghubungi
                          pihak yang bertanggung jawab untuk memperbaiki lampu-lampu di Jalan
                          Raja Ali Haji. Kami memahami pentingnya pencahayaan yang memadai
                          untuk menjaga keamanan warga. Kami akan segera memberikan pembaruan
                          tentang perkembangan perbaikan. Terima kasih atas kerja sama Anda!
                        </p>
                      </div>
                      <img src={image} alt="profile-chat" className="profile-chat" />
                    </div>
                  </div>
                  <div className="section-chat">
                    <div className="menu-chat">
                      <img src={image} alt="profile-chat" className="profile-chat" />
                      <div className="card chat-balon-user">
                        <div className="header-title">
                          <h6 className="username">Budi</h6>
                          <h6 className="time">1 jam</h6>
                        </div>
                        <p className="text-chat">
                          Tolong segera diinformasikan secepatnya.
                          Karena tempat tersebut rawan kejahatan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="section-input">
                    <input type="text" className="input-chat" placeholder="Tambahkan komentar" />
                    <button type="submit" className="button-chat">
                      <Icon icon="material-symbols-light:send" color="rgba(0, 0, 0, 0.25098039215686274)" className="icon-button"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}