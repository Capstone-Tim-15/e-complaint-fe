import LandingPage from "./pages/LandingPage";
import ManageBerita from "./pages/ManageBerita";
import Dashboard from "./pages/Dashboard";
import ChatList from "./pages/ChatList";
import Login from "./pages/Login";
import RecoveryPassword from "./components/Login/RecoveryPassword";
import NewPassword from "./components/Login/NewPassword";
import Success from "./components/Login/Success";
import Import from "./pages/Import";
import Notification from "./pages/Notification";
import FormBerita from "./components/TambahBerita/FormBerita";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ComplaintPage from "./pages/Complaint";
import Kategori from "./pages/Kategori";
import TambahKategori from "./components/Kategori/TambahKategori";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/recovery" element={<RecoveryPassword />}></Route>
        <Route path="/newpassword" element={<NewPassword />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/complaint" element={<ComplaintPage />}></Route>
        <Route path="/berita" element={<ManageBerita />}></Route>
        <Route path="/kategori" element={<Kategori />}></Route>
        <Route path="/tambahkategori" element={<TambahKategori />}></Route>
        <Route path="/tambahberita" element={<FormBerita />}></Route>
        <Route path="/chat" element={<ChatList />}></Route>
        <Route path="/import" element={<Import />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/faq" element={<FaqPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
