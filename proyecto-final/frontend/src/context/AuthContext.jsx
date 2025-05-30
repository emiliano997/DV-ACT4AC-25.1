import { createContext, useContext, useState } from "react";

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

  const login = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (!user) {
      alert("User not found");
      return false;
    }

    if (user.password !== password) {
      alert("Incorrect password");
      return false;
    }

    setIsLoggedIn(true);
    setUser({
      id: user.id,
      username: user.username,
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

    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser("");
    localStorage.removeItem("user");
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
