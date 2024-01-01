import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header'
import Food from './components/Food'
import Ingredients from './components/Ingredients';
import Instruction from './components/Instruction';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const App = () => {
  const [food, setFood] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getFoodRequest()
  }, []);
  const getFoodRequest = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.meals) {
        setFood(responseJson.meals);
        setCurrentIndex(0);
      }


    } catch (error) {
      console.log('Error Fetching Meals:', error)
    }
  }

  const HandleNext = () => {
    getFoodRequest();
  };

  return (
    <>
      <div className='row'>
        <Header heading='Food Recipe' />
      </div>
      <hr />
      <Container id="food-recipe">


        <div className="App" >
          <div className='row'>
            <div className='col' id="food-part">
              {food.length > 0 && (
                <Food food={food} currentIndex={[currentIndex]} />
              )}
              <Button id="food-next" onClick={HandleNext}>Next</Button>
            </div>
            <div className='col' id="ingredient-part">
              {food.length > 0 && (
                <Ingredients food={food} currentIndex={[currentIndex]} />
              )}
            </div>

            {food.length > 0 && (
              <div className='col' id="instruction-part">
                <Instruction food={food} currentIndex={[currentIndex]} />
              </div>
            )}
          </div>

        </div>
      </Container>
    </>
  );
}

export default App;
