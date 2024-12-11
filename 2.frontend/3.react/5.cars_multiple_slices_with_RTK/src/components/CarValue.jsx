import { useSelector } from 'react-redux';

function CarValue() {

  const { data, searchTerm } = useSelector((state) => state.cars);

  const filteredCars = data.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCost = filteredCars.reduce((acc, car) => acc + car.cost, 0);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
  
}

export default CarValue;
