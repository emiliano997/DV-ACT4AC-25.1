import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error", err);
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
}
