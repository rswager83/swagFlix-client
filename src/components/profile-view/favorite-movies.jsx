import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Figure, Card } from "react-bootstrap";
import "./profile-view.scss";

export function FavoriteMovieView(props) {
  const { movies, favoriteMovies, currentUser, token } = props;

  const favoriteMoviesId = favoriteMovies.map((m) => m._id);

  const favoriteMovieList = movies.filter((m) => {
    return favoriteMoviesId.includes(m._id);
  });

  const handleMovieDelete = (id) => {
    let token = localStorage.getItem("token");

    axios
      .delete(
        `https://swagflix.herokuapp.com/users/${localStorage.getItem(
          "user"
        )}/movies/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        alert("The movie was successfully removed from list.");
        window.open("/users/:username", "_self");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h3>FavoriteMovies</h3>
          </Col>
        </Row>
        <Row>
          {favoriteMovieList.map(({ ImagePath, Title, _id }) => {
            return (
              <Col xs={12} md={6} lg={3} key={_id} className="fav-movie">
                <Figure>
                  <Link to={`/movies/${_id}`}>
                    <Figure.Image src={ImagePath} alt={Title} />
                    <Figure.Caption>{Title}</Figure.Caption>
                  </Link>
                </Figure>
                <Button onClick={() => removeFav(_id)}>Remove from list</Button>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
}
