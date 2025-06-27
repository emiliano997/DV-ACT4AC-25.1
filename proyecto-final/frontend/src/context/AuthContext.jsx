import { createContext, useContext, useState } from "react";
import { BACKEND_URL } from "../utils/constants";
import { jwtDecode } from "jwt-decode";

const users = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "1234",
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    email: "user@example.com",
    password: "1234",
    role: "user",
  },
  {
    id: 3,
    username: "user2",
    email: "user2@example.com",
    password: "1234",
    role: "user",
  },
];

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" || false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const login = async (email, password) => {
    try {
      const res = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        console.log("Hubo un error");
        return;
      }

      const { token } = await res.json();
      console.log(token);

      const user = jwtDecode(token);

      setIsLoggedIn(true);
      setUser({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        })
      );
      localStorage.setItem("token", token);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
