import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function GameItem({ id, name, background_image, rating, released }) {
    
    return (
        <Card>
            <Card.Img variant="top" src={background_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><b>Rating: </b>{rating}</Card.Text>
                <Card.Text><b>Release Date: </b>{released}</Card.Text>
            </Card.Body>
        </Card>
    );
}

GameItem.propTypes = {
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.string.isRequired
};

export default GameItem;