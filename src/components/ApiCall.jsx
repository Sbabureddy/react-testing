import React, { useState, useEffect, Fragment } from "react";

function ApiCall(props) {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
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
          <details key={String(info.id)}>
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
