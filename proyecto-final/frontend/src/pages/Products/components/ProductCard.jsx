export function ProductCard({ title, description, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{price}</small>
    </div>
  );
}
