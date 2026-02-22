import { useEffect, useState } from "react";

import type { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const payload = (await res.json()) as { data: User[] };
        setUsers(payload.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    }

    loadUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <strong>Full name:</strong> {user.name} {user.surname}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
