import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

export default function App() {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

// About Project
  // name input - car name
  // cost input - car cost
  // cars list - {id, name, cost} => Cars can be added/deleted
  // search bar - string (search car names to filter)
  // total cost - sum of cost 
  // matched cars - based on search term, we will display the list of cars that matches the term
// These are all part where our content changes based on users input. But when you look carefully, the last 2 doesn't change directly based on user's input. Rather they are based on first 4. Hence total cost and matched cars are called as derived state.
  // Not a new concept (just a term). We generally declare a state for anyhting that changes on the screen.
  // But just understand that not everything that changes on screen needs a state.

// Redux Store design
  // 1. Identify what state exists in the app -  We have done that above
  // 2. Identify how that state changes over time
    // change name, change cost, change search term, add car, remove car
    // As-usual for each state, we will be creating a mini-reducer function
      // changeName, changeCost, changeSearchterm, addCar, removeCar
    // As you know for each of this min-reducer function redux toolkit will automatcially create 'action' 
  // 3. Group together common pieces of state - Very much subjective
    // Possibility 1
      // a) state related to adding cars - name, cost
      // b) state related to list of cars - searchTerm, carsList
    // Possibility 2
      // a) state related to cars - name, cost, searchTerm, carsList
    // Possibility 3
      // a) state related to adding cars - name, cost
      // b) state related to cars list - carsList
      // c) state related to search - searchTerm
  // 4. create a slice for each group
    // Form Slice - changeName, changeCost
    // Car Slice - changeTerm, addCar, removeCar 