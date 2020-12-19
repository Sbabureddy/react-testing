import React, { useState, useEffect, Fragment } from "react";

function ApiCall(props) {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    setUser(await response.json());
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return "loading...";
  }
  return (
    <Fragment>
      {user.map((info) => {
        return (
          <details key={info.id}>
            <summary>{info.name}</summary>
            <strong>{info.email}</strong>
            <br />
            lives in {info.address.street}
          </details>
        );
      })}
    </Fragment>
  );
}

export default ApiCall;
