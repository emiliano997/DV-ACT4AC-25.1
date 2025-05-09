export function UsersTable({ users }) {
  const columns = [
    { id: "id", label: "#" },
    { id: "name", label: "Name" },
    { id: "username", label: "Username" },
    { id: "email", label: "Email" },
    { id: "website", label: "Website" },
  ];

  console.log(users);

  return (
    <table className="responsive-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {columns.map((column) => (
              <td key={column.id}>{user[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
