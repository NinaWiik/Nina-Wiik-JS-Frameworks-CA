import React, { useState, useEffect } from 'react'
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    
    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.dir(json)
                setDetail(json);
                })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animated="grow" variant="info" />
    }

    return (
        <>
        <Col md={6} >
            <Image className="detail-image" src={detail.background_image} />
        </Col>
        <Row>

            <Col>
                <h1>{detail.name}</h1>
                <p>
                    <b>Description: </b> <div dangerouslySetInnerHTML ={{__html: detail.description}} /> 
                </p>
                <p>
                    <b>Website: </b><a href={detail.website}>Click here </a>
                </p>
            </Col>
        </Row>
        </>
    );
}

export default GameDetail
