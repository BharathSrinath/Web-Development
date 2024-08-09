import './App.css';
import { Article } from './Article';
import { Aside } from './Aside';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Article/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
