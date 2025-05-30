import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../utils/roles";
import "./Users.css";
import { useModal } from "../../context/ModalContext";
import { toast } from "react-toastify";

export function Users() {
  const { isLoggedIn, user } = useAuth();
  const { openModal } = useModal();
  const [data, setData] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  });

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setSelectedUser(userToEdit);
    setData({
      username: userToEdit.username,
      email: userToEdit.email,
      password: userToEdit.password,
      role: userToEdit.role,
    });

    console.log(userToEdit);
    console.log(data);
  };

  const handleDelete = async (id) => {
    const confirm = await openModal({
      title: "¿Estás seguro que deseas eliminar este usuario?",
      text: "Esta acción no se puede deshacer.",
    });

    if (!confirm) {
      return;
    }

    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          alert("Error deleting user");
          return;
        }

        return res.json();
      })
      .then((data) => {
        if (data) {
          toast("User deleted successfully", {
            theme: "dark",
          });
          setUsers(users.filter((user) => user.id !== id));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error deleting user");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, role } = data;

    if (selectedUser) {
      fetch(`http://localhost:3000/users/${selectedUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      })
        .then((res) => {
          if (!res.ok) {
            alert("Error updating user");
            return;
          }

          return res.json();
        })
        .then((data) => {
          if (data) {
            alert("User updated successfully");
            setUsers(
              users.map((user) =>
                user.id === selectedUser.id ? { ...user, ...data } : user
              )
            );
            setSelectedUser(null);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error updating user");
        })
        .finally(() => {
          setData({});
          e.target.reset();
        });
    } else {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      })
        .then((res) => {
          if (!res.ok) {
            alert("Error creating user");
            return;
          }

          return res.json();
        })
        .then((data) => {
          if (data) {
            alert("User created successfully");
            setData({});
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error creating user");
        })
        .finally(() => {
          setData({});
          e.target.reset();
        });
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Unauthorized</h2>
        <p>You need to be logged in to see this page.</p>
      </div>
    );
  }

  return (
    <>
      <h2>Users Page</h2>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                {user.role === ROLES.ADMIN && (
                  <td>
                    <button onClick={() => handleDelete(u.id)}>Delete</button>
                    <button onClick={() => handleEdit(u.id)}>Edit</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {user.role === ROLES.ADMIN && (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <p>Please fill in the form to create a new user.</p>
            <input
              type="text"
              placeholder="Username"
              name="username"
              defaultValue={data.username || ""}
              onChange={updateData}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={data.email || ""}
              onChange={updateData}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              defaultValue={data.password || ""}
              onChange={updateData}
            />
            <select name="role" id="" onChange={updateData}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <button type="submit">Create User</button>
          </form>
        </div>
      )}
    </>
  );
}
