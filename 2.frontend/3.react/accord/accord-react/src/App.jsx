import './App.css';
import { MyForm } from './MyForm';
import { UserData1, UserData2, ImageData } from './Userdata'; 
import './MyForm.css'
import BootStrapExample from './BootStrapExample';
import ReactHookForm from './ReactHookForm';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Page</h2>
      <p>This is my first React page</p>
      <h1>User Login Form</h1>
      <MyForm/>
      <UserData1/>
      <UserData2/>
      <ImageData/>
      <BootStrapExample/>
      <ReactHookForm/>
    </div>
  );
}

export default App;
