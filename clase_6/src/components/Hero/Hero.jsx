import "./Hero.css";

export function Hero({ title, description }) {
  return (
    <header>
      <h1> {title} </h1>
      <h2>{description}</h2>
    </header>
  );
}
