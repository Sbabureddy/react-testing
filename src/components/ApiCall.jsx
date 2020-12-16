import React, { useState, useEffect } from "react";

function ApiCall(props) {
  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setUser(await response.json());
  };

  useEffect(() => {
    fetchUser(props.id);
  }, [props.id]);

  if (!user) {
    return "loading...";
  }
  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.email}</strong>
      <br />
      lives in {user.address.street}
    </details>
  );
}

export default ApiCall;
