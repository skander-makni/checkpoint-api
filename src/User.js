import React, { useEffect, useState } from "react";
import { Card, ListGroup, Spinner } from "react-bootstrap";
import axios from "axios";
const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => setUser(res.data))
      .then(() => setloading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Header style={{ backgroundColor: "black" }}>
            {user.id}
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>name: {user.name}</ListGroup.Item>
            <ListGroup.Item>username: {user.username}</ListGroup.Item>
            <ListGroup.Item>street: {user.address.street}</ListGroup.Item>
            <ListGroup.Item>suite: {user.address.suite}</ListGroup.Item>
            <ListGroup.Item>vity: {user.address.city}</ListGroup.Item>
            <ListGroup.Item>zipcode: {user.address.zipcode}</ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

export default User;
