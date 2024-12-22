import { useState } from 'react';
import "./Bookcreate.css"

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create" style={{width: '30%', margin: '100px auto', borderRadius: '10px', position: 'relative'}}>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" value={title} onChange={handleChange} placeholder='Title' style={{width: '200px', height: '50px', textAlign: 'center', margin: '10px auto'}}/>
        <button className="button" style={{width: '200px', height: '50px', textAlign: 'center', margin: '10px auto'}} >Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
