import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header>
      <h1>Aplicación</h1>
      <nav>
        {routes.map((route) => {
          if (route.name === "Login" && isLoggedIn) {
            return null; // Skip the Login link if the user is logged in
          }

          return (
            <Link key={route.name} to={route.path}>
              {route.name}
            </Link>
          );
        })}

        {isLoggedIn && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
