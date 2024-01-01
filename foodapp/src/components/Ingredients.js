import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const Ingredients = (props) => {
    const { food, currentIndex } = props;
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = food[currentIndex][`strIngredient${i}`];
        if (ingredient) {
            ingredientsList.push(
                <ListGroup.Item id="ingredient-item" key={i}>{ingredient}</ListGroup.Item>
            );
        }
    }
    return (
        <>
            <h1>Ingredients</h1>
            <ListGroup id="list-ingredient">
                {ingredientsList.length > 0 ? (
                    ingredientsList
                ) : (
                    <ListGroup.Item>No Ingredients Available</ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
};

export default Ingredients;