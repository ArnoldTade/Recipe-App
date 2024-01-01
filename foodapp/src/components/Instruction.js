import React from "react";

const Instruction = (props) => {
    const { food, currentIndex } = props;

    return (
        <>
            <h1>Instruction</h1>
            <p id="food-instruction">
                {food[currentIndex].strInstructions}
            </p>
        </>
    )
}
export default Instruction;