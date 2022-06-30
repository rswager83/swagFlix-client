import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Figure, Card } from "react-bootstrap";
import "./profile-view.scss";

export function FavoriteMovieView(props) {
  const { movies, favoriteMovies, currentUser } = props;

  const favoriteMoviesId = favoriteMovies.map((m) => m._id);

  const favoriteMoviesList = movies.filter((m) => {
    return favoriteMoviesId.includes(m._id);
  });

  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h3>I am here</h3>
          </Col>
        </Row>

        <Row>
          {favoriteMoviesList.map((movie) => {
            return (
              <Col xs={12} md={6} lg={3} key={_id} className="fav-movie">
                <Figure>
                  <Link to={`/movies/${movie._id}`}>
                    <Figure.Image src={movie.ImagePath} alt={movie.Title} />
                    <Figure.Caption>{movie.Title}</Figure.Caption>
                  </Link>
                </Figure>
                <Button
                  onClick={() => {
                    handleMovieDelete(_id);
                  }}
                >
                  Remove from list
                </Button>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
}
