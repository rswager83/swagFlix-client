import React from "react";
import { Button, Card } from "react-bootstrap/";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export class MovieCard extends React.Component {
  addMovie(movie, user) {
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    console.log(movie);
    console.log(token);

    axios
      .post(
        `https://swagflix.herokuapp.com/users/${username}/movies/${movie._id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        this.setState({
          user: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movie, user } = this.props;

    return (
      <Card id="movie-card">
        <Link to={`/movies/${movie._id}`}>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Link>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
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
  }).isRequired,
};
