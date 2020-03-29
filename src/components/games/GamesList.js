import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GameItem from "./GameItem";
import Search from "../search/Search";
import { BASE_URL } from "../../constants/api";

function GamesList() {

    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => { 
                console.dir(json.results)
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    function handleSearch(inputValue) {
        const lowerCaseInput = inputValue.toLowerCase();

        const filteredArray = games.filter(function(game) {
            const lowerCaseName = game.name.toLowerCase();

            if (lowerCaseName.startsWith(lowerCaseInput)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredGames(filteredArray);
    }

    function displayResults() {
        if (filteredGames.length === 0) {
            return <div className="filter">No results</div>
        }
    }

    if (loading) {
        return <Spinner animated="grow" variant="info" />;
    }

    return (
        <>
        <div>
            <Search makeSearch={handleSearch} />
            {displayResults()}
            </div>
            <Row>
                {filteredGames.map(game => {
                    const { name, background_image, rating, released } = game;
                    const href = "games/" + game.id;

                    return (
                        <Col sm={6} lg={4} key={name}>
                            <GameItem name={name} background_image={background_image} rating={rating} released={released} />
                            <Button variant="info" href={href} block >Details</Button>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default GamesList;