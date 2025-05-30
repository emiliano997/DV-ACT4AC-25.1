import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <ModalProvider>
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
          </ModalProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
