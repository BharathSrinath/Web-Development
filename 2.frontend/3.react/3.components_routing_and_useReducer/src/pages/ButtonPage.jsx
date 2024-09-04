import { GoBell } from 'react-icons/go';
import { AiFillCustomerService, AiFillDelete } from "react-icons/ai";
import Button from '../components/Button';

function App() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button primary outline rounded margin ="m-5" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline margin ="m-5" onMouseEnter={handleClick}>
          <AiFillDelete />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning margin ="m-5" onMouseLeave={handleClick}>
          <AiFillCustomerService />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline margin ="m-5">
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded margin ="m-5">
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;

