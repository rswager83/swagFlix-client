import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Row, Col, Figure } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="movie-card my-3">
        <Card.Body>
          <Row>
            <Col xs={12}>
              <Figure>
                <Figure.Image variant="top" src={movie.ImagePath} />
                <Figure>
                  <Figure.Caption>{movie.Title}</Figure.Caption>
                  <Link to={`/movies/${movie._id}`}>
                    <Button className="m" variant="link">
                      Open
                    </Button>
                  </Link>
                </Figure>
                {/* <Button
                  className="btn-fav ml-5"
                  onClick={() => this.addToFavorites(movie._id)}
                >
                  Add to Favorites
                </Button> */}
              </Figure>
            </Col>
          </Row>
        </Card.Body>
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
