import React from "react";
import PropTypes from "prop-types";

import { Button, Container, Row, Col } from "react-bootstrap";

import "./director-view.scss";

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container className="director-view mt-4">
        <Row>
          <Col className="label">Director:</Col>
          <Col className="value">{director.Name}</Col>
        </Row>
        <Row>
          <Col className="label">Bio:</Col>
          <Col className="value">{director.Bio}</Col>
        </Row>
        <Row>
          <Col className="label">Birth:</Col>
          <Col className="value">{director.Birth}</Col>
        </Row>
        <Row>
          <Col className="label">Death:</Col>
          <Col className="value">{director.Death}</Col>
        </Row>

        <Button
          className="mt-5"
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string,
  }).isRequired,
};
