import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Hero } from "./components/Hero/Hero";
import { Layout } from "./components/Layout/Layout";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <Layout>
      <Hero title="Página principal" description="Descripción..." />

      <Users />
    </Layout>
  );
}

export default App;
