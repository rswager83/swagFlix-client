import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

import "./movie-view.scss";

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      user: null,
    };
  }

  addMovie(movie, user) {
    let username = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    console.log(movie);
    console.log(token);

    axios
      .post(
        `https://swagflix.herokuapp.com/users/${username}/movies/${movie._id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response.data);
        alert(`${movie.Title} has been added from your list.`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  delFavMovie = (movie, user) => {
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("user");
    console.log(movie);
    console.log(token);
    axios
      .delete(
        `https://swagflix.herokuapp.com/users/${username}/movies/${movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert(`${movie.Title} has been removed from your list.`);
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  render() {
    const { movie, user, onBackClick } = this.props;

    return (
      <Container className="movie-view">
        <Row>
          <Col className="movie-poster">
            <img src={movie.ImagePath} />
          </Col>
        </Row>
        <Row className="movie-title">
          <Col className="label">Title: </Col>
          <Col className="value">{movie.Title}</Col>
        </Row>
        <Row className="movie-description">
          <Col className="label">Description: </Col>
          <Col className="value">{movie.Description}</Col>
        </Row>
        <Row>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link>
        </Row>
        <Button
          className=""
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
        <Button
          className="button ml-2"
          onClick={() => {
            this.addMovie(movie, user);
          }}
        >
          Add to favorites
        </Button>
        <Button
          className="button ml-2"
          onClick={() => {
            this.delFavMovie(movie, user);
          }}
        >
          Remove from favorites
        </Button>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
