import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Food = (props) => {
    const { food, currentIndex } = props;
    return (
        <>
            <Card style={{ width: '20rem' }} id="food-card">
                <Card.Img id="food-image" variant="top" src={food[currentIndex].strMealThumb} />
                <Card.Body>
                    <Card.Title id="card-title">{food[currentIndex].strMeal} </Card.Title>
                    <ListGroup className="list-group-flush" id="food-list">
                        <ListGroup.Item>{food[currentIndex].strCategory}</ListGroup.Item>
                        <ListGroup.Item>{food[currentIndex].strArea}</ListGroup.Item>
                        <ListGroup.Item>{food[currentIndex].strTags}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}

export default Food;