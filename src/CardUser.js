import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardUser.css";
const CardUser = ({ user }) => {
  return (
    <div>
      <Card className="style3" style={{ width: "18rem" }}>
        <Link to={`/User/${user.id}`}>
          <Card.Header style={{ backgroundColor: "black" }}>
            {user.id}
          </Card.Header>
        </Link>
        <ListGroup variant="flush">
          <ListGroup.Item>name: {user.name}</ListGroup.Item>
          <ListGroup.Item>username: {user.username}</ListGroup.Item>
          <ListGroup.Item>street: {user.address.street}</ListGroup.Item>
          <ListGroup.Item>suite: {user.address.suite}</ListGroup.Item>
          <ListGroup.Item>city: {user.address.city}</ListGroup.Item>
          <ListGroup.Item>zipcode: {user.address.zipcode}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CardUser;
