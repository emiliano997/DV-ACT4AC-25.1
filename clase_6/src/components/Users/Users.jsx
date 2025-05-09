import { useEffect, useState } from "react";
import { UsersTable } from "./UsersTable/UsersTable";
import { Loader } from "../Loader/Loader";
import { useUsers } from "./hooks/useUsers";

export function Users() {
  const { users, loading, error } = useUsers();

  if (error) {
    return (
      <div className="center-align red darken-1 white-text">
        <h2>Error loading users</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <h2>Users List</h2>

      {loading ? (
        <div className="center-align">
          <Loader />
        </div>
      ) : (
        <UsersTable users={users} />
      )}
    </>
  );
}
