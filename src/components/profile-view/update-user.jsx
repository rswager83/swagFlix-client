import React from "react";
import { Form, Button } from "react-bootstrap";

export default function UpdateUser({ handleSubmit, handleUpdate }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          name="Username"
          defaultValue={user.Username}
          onChange={(e) => handleUpdate(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="Password"
          defaultValue={user.Password}
          onChange={(e) => handleUpdate(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="Email"
          defaultValue={user.Email}
          onChange={(e) => handleUpdate(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="date"
          name="Birthday"
          defaultValue={user.Birthday}
          onChange={(e) => handleUpdate(e)}
        />
      </Form.Group>
      <Button type="submit">Update</Button>
    </Form>
  );
}
