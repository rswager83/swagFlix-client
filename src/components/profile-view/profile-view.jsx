import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./profile-view.scss";
// import { UserInfo } from "./user-info";
import { FavoriteMovieView } from "./favorite-movies";
// import { UpdateUser } from "./update-user";

import { Container, Col, Row, Button, Card } from "react-bootstrap";

export function ProfileView(props) {
  const [user, setUser] = useState("");
  const [movies, setMovies] = useState("");
  const currentUser = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const getUser = () => {
    axios
      .get(`https://swagflix.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer $(token)` },
      })
      .then((response) => {
        setUser(response.data);
        setFavoriteMovies(response.data.FavoriteMovies);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (e) => {
    axios.delete(`https://swagflix.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer $(token)` },
    });
    alert(`The account ${user.Username} was successfully deleted.`);
    localStorage.clear();
    window.open("/register", "_self");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://swagflix.herokuapp.com/users/${user}`,
        {
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday,
        },
        {
          headers: { Authorization: `Bearer $(token)` },
        }
      )
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });

        localStorage.setItem("user", this.state.Username);
        alert("Profile has been updated!");
      });
  };

  useEffect(() => {
    getUser(token);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Body>
              {/* <UserInfo name={user.Username} email={user.Email} /> */}
              <Button onClick={handleDelete}>Delete Profile</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card>
            <Card.Body>
              {/* <UpdateUser
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <FavoriteMovieView
        movies={movies}
        favoriteMovies={favoriteMovies}
        currentUser={currentUser}
        token={token}
      />

      {/* <FavoriteMovieView favoriteMovieList={favoriteMovieList} /> */}
    </Container>
  );
}

/* <Row>
        <Col className="label">Username</Col>
        <Col className="value">{user.Username}</Col>
      </Row>
      <Row>
        <Col className="label">Password</Col>
        <Col className="value">{user.Password}</Col>
      </Row>
      <Row>
        <Col className="label">Email</Col>
        <Col className="value">{user.Email}</Col>
      </Row>
      <Row>
        <Col className="label">Birthday</Col>
        <Col className="value">{user.Birthday}</Col>
      </Row>
      <Row>
        <FavoriteMovieView
          movies={movies}
          favoriteMovies={favoriteMovies}
          currentUser={currentUser}
          token={token}
        ></FavoriteMovieView>
      </Row>
      <Button onClick={handleDelete}>Delete Profile</Button>
    </Container> */

ProfileView.propTypes = {
  profileView: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
