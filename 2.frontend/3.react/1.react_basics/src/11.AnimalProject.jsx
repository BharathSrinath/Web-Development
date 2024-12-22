import AnimalShow from "./11a.AnimalShow";
import "./11.AnimalProject.css"
import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

export default function AnimalProject() {

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    };
    // Above lines of code can be written with a help of an additional variable too (For understanding)  
      // const handleClick = () => {
      //   const addAnimals = [...animals, getRandomAnimal()]
      //   setAnimals(addAnimals);
      // };
  
    const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow key={index} type={animal} />;
      // Using key as index is a bad practice. But temporarily we are using this.
    });
  
    return (
      <div className="RandAnimals">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
      </div>
    )
  }