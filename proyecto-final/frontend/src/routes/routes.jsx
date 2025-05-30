import { LoginPage } from "../pages/Auth/Login";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Users } from "../pages/Users/Users";

export const routes = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/products", element: <Products />, name: "Products" },
  { path: "/users", element: <Users />, name: "Users" },
  { path: "/login", element: <LoginPage />, name: "Login" },
];
