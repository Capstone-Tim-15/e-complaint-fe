import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Complaint from "../pages/Complaint";
import ManageBerita from "../pages/ManageBerita";
import ChatList from "../pages/ChatList";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard"></Navigate>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/complaint" element={<Complaint></Complaint>}></Route>
      <Route path="/berita" element={<ManageBerita/>}></Route>
      <Route path="/chat" element={<ChatList />}></Route>
    </Routes>

  );
}
