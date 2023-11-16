import LandingPage from "./pages/LandingPage";
import ManageBerita from "./pages/ManageBerita";
import Dashboard from "./pages/Dashboard";
import ChatList from "./pages/ChatList";
import Login from "./pages/Login";
import Export from "./pages/Export";
import Notification from "./pages/notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ComplaintPage from "./pages/Complaint";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/complaint" element={<ComplaintPage />}></Route>
        <Route path="/berita" element={<ManageBerita />}></Route>
        <Route path="/chat" element={<ChatList />}></Route>
        <Route path="/export" element={<Export />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
