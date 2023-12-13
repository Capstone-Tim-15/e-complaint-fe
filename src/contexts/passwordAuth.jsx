import { createContext, useContext, useState } from "react";

const AuthContextPassword = createContext();

export const AuthProviderPassword = ({ children }) => {
  const [tokenRecovery, setTokenRecovery] = useState(
    localStorage.getItem("tokenRecovery") || ""
  );

  const setGlobalToken = (newToken) => {
    setTokenRecovery(newToken);
    localStorage.setItem("tokenRecovery", newToken);
  };

  return (
    <AuthContextPassword.Provider
      value={{ tokenRecovery, setTokenRecovery: setGlobalToken }}
    >
      {children}
    </AuthContextPassword.Provider>
  );
};

export const useAuthRecovery = () => {
  return useContext(AuthContextPassword);
};
