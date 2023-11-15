import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>;
}
