import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();
  
  const { data, searchTerm } = useSelector((state) => state.cars);
  const { name } = useSelector((state) => state.form);

  const cars = data.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // Decide if the car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        {/* When bold is true, we will apply bold class to className */}
        <p>
          {car.name} - ${car.cost}
          {/* $ is just sign that we want before cost. It is not a template literal here */}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
