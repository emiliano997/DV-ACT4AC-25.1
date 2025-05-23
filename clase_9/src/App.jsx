import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
