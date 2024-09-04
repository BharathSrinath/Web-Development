import { useState } from 'react'
// We are not using "./" => It means that we are importing a package
// To go back form the existing folder => "../"
// To go back two folders => "../../"
// When we have "./" => It means that we are importing a file that we created
import './1.App.css'
// In React, when importing JSX files, we don't specify the file extension. This is because React automatically assumes .jsx or .js when we import a file. This behavior is part of the module resolution system in modern JavaScript environments.
// React looks for ./MyComponent.jsx first and then falls back to ./MyComponent.js if the JSX file is not found.
import Greeter from './2.Greeter'
// Greeter is the name which can be changed when the export is default. If the export is named, you have to use the same name here too.
// With named export, you need to use curly braces when you import
import Die from './3.Die'
// Multiple components can be imported separated by a comma (,)
// import {Die}, Die1 from './3.Die'
import DoubleDice from './4.DoubleDice'
import ListPicker from './5.ListPicker'
import Slots from './6.Slots'
import ShoppingList from './7.ShoppingList'
import Property from './8.Property'
import Clicker from "./9.Clicker"
import HeaderPDA from './10a.HeaderPDA'
import ProfileCardPDA from './10.ProfileCardPDA'
import AnimalProject from './11.AnimalProject'
import Colorboxes from './12.ColorboxProject'
import SearchBar from './13.SearchBar'
import searchImages from './13a.SearchBarApi'
import ImageList from './13b.ImageList'

function App() {

  const [images, setImages] = useState([]);

  return (
    <div>
      {/* Passing arguments and understanding default arguments */}
      <Greeter person="Aravind" from="Bharath" />
      <Greeter person="Badri" />
      <Greeter from="Bharath" />

      <Die numSides={20} />
      <Die />
      <Die numSides={10} />

      {/* DoubleDice game */}
      <DoubleDice />
      
      {/* Passing arrays as arguments */}
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      {/* <ListPicker values = {{a:1, b:2, c:3}}/> for objects  */}

      {/* Slots game */}
      <Slots val1="1" val2="1" val3="1" />
      <Slots val1="1" val2="2" val3="3" />

      {/* Shopping list: This can be done within a single component. But just for demonstration purpose we are using two components - ShoppingList and ShoppingListItem */}
      <ShoppingList items={[
        { id: 1, item: "eggs", quantity: 12, completed: false },
        { id: 2, item: "milk", quantity: 2, completed: true },
        { id: 3, item: "chicken", quantity: 4, completed: false },
        { id: 4, item: "carrot", quantity: 6, completed: true }
      ]} />

      <Property items={[
        { id: 1, propName: "Desert Yurt", price: 150, rating: "4.9" },
        { id: 2, propName: "Lone Mountain Cabin", price: 250, rating: "4.8" },
        { id: 3, propName: "Cactus Retreat", price: 300, rating: "4.75" },
        { id: 4, propName: "Redwood Treehouse Escape", price: 120, rating: "4.9" },
        { id: 5, propName: "Oceanview Condo", price: 140, rating: "4.7" },
        { id: 6, propName: "Gold Miner Campground", price: 96, rating: "4.69" }
      ]} />

      {/* React events */}
      <Clicker />

      {/* Personal digital assistant project */}
      <div className='Header'>
        <HeaderPDA heading="Personal Digital Assistants" />
      </div>
      <div className='Profilecard'>
        <ProfileCardPDA title="Alexa" twitter="@alexa99" image="./src/assets/images/alexa.png" />
        <ProfileCardPDA title="Cortana" twitter="@cortana32" image="./src/assets/images/cortana.png" />
        <ProfileCardPDA title="Siri" twitter="@siri01" image="./src/assets/images/siri.png" />
        {/* Passing multiple attributes will result in a single object at the receiving end. Lets say that you receive them as 'props' (name of the parameter). Now the atrributes can be accessed using method(.) operator just like an object (Ex: props.title) */}
        {/* We can also destructure an object as we have been doing it for the last few exercises where instead of receiving it as an entire object, we can driectly specify the property names that we require.  */}
      </div>

      {/* Creating a project in which random animals will be displayed (from an array list) with a buttton click. The animal will have an heart symbol at the bottom corner that will increase in size when you click the div element under which the animal is placed. */}
      <AnimalProject />

      {/* Colorbox Project */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Colorboxes colors={['orange', 'dodgerblue', 'seagreen', 'gold', 'rebeccapurple', 'firebrick', 'teal', 'darkorange', 'turquoise', 'tomato', 'midnightblue', 'chocolate']} />
      </div>
      
      {/* Search images from unsplash project */}
      <div>
        <SearchBar onSubmit={async function handlesubmit(term) {
          {/* const [images, setImages] = useState([]); */ }
          const result = await searchImages(term);
          setImages(result);
          // Please remember that you are not executing the onSubmit function here. You are just passing it as a reference to searchBar where it will be called and executed.
        }} />
        <ImageList images={images} />
      </div>
    </div>
  )
}

export default App
