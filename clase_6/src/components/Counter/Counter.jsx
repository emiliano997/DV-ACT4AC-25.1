import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState([]);
  const [isTen, setIsTen] = useState(false);

  useEffect(() => {
    console.log("El número es par: ", isTen);
  }, [isTen]);

  const add = () => {
    setCount([...count, count.length + 1]);
    if (count.length === 10) {
      setIsTen(true);
    }
  };

  const substract = () => {
    setCount([...count, count.length - 1]);
  };

  return (
    <div>
      {count.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}

      <button
        className="btn waves-effect waves-light blue darken-2"
        onClick={add}
      >
        +
      </button>
      <button
        className="btn waves-effect waves-light red darken-2"
        onClick={substract}
      >
        -
      </button>
    </div>
  );
}
