import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Complaint from "../pages/Complaint";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard"></Navigate>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/complaint" element={<Complaint></Complaint>}></Route>
    </Routes>
  );
}
