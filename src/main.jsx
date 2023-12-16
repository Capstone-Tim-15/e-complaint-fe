import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/authContext.jsx";
import { AuthProviderPassword } from "./contexts/passwordAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthProviderPassword>
        <App />
      </AuthProviderPassword>
    </AuthProvider>
  </React.StrictMode>
);
