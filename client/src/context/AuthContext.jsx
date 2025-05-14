import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const BACKEND_URL = "https://leftoverly-backend.onrender.com";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
      email,
      password,
    });
    const userData = res.data.user;
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", res.data.token);
    setUser(userData);
  };

  const signup = async (username, email, password) => {
    const res = await axios.post(`${BACKEND_URL}/api/auth/signup`, {
      username,
      email,
      password,
    });
    const userData = res.data.user;
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", res.data.token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
