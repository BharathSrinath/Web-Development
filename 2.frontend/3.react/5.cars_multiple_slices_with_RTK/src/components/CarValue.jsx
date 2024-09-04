import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  // Exactly same filter used in carList to filter out cars. On top of the we are adding reduce() to update the total value of the filtered costs.
  // We can do this using for-loop too. Storing filtered cars in variable and then looping over it within which we can access the cost property and add them together. That is equally right.

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
