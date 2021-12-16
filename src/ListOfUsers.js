import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CardUser from "./CardUser";
import "./ListOfUsers.css";
const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .then(() => setloading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="style1">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        users.map((user) => (
          <CardUser className="style2" user={user} key={user.id} />
        ))
      )}
    </div>
  );
};

export default ListOfUsers;
