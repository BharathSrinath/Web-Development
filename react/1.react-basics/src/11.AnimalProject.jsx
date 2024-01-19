import AnimalShow from "./11a.AnimalShow";
import "./11.AnimalProject.css"
import React, { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

export default function AnimalProject() {
    const [animals, setAnimals] = useState([]);
  
    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    };
    // This is a bad line of code. Although it works, we cannot mutate the state. That is animals array being empty is the original state. We should not change this state. We have to always create a copy and work with that. Above lines of code can be re-written as  
      // const handleClick = () => {
      // const addAnimals = [...animals, getRandomAnimal()]
      // setAnimals(addAnimals);
      // };
    // We will learn about this later 
  
    const renderedAnimals = animals.map((animal, index) => {
      // When you work with an object, you need to specify an id to assign it to the key. But when working with an array you can simply make use of the index to assign it to the key. 
      // Hope you remember the map syntax
        // let newArray = oldArray.map(function(currentValue, index, oldArray)
      return <AnimalShow key={index} type={animal} />;
    });
  
    return (
      <div className="RandAnimals">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
      </div>
    )
  }