import React from "react";

export default function UserInfo({ email, name }) {
  return (
    <>
      <h4>Your Info</h4>
      <p>Name: {name}</p>
      <p>e-mail: {email}</p>
    </>
  );
}
