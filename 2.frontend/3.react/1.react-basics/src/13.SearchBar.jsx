// Lets see how this project works
// When you type an input in the input field and hit enter, we should take that input and do a search with unsplash API. Also the texts should disappear after you hit enter.
// Before that, you have to undertstand this about react
    // You remember 'selectors' from JS right? (querySelector, getElementId, etc). We wont be using any of them in react.
    // This is because, using them breaks the principles of React.
    // React works by maintaining a virtual DOM and updating the actual DOM based on the changes to this virtual representation. If we manually manipulate the DOM using vanilla JavaScript, React loses control over the DOM, and this can lead to a variety of issues.
// As you can see, in this project we need to get the input entered by user without using any of those selectors
// We will rely on hooks.

import { useState } from "react";
import "./13.SearchBar.css"

export default function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(term);
        setTerm('');
        // This will empty the input field after hitting enter
        // async and await will help the process of emptying the field slow down by which they will be emptied a=only after the request submission is completed
    }

    const handleChange = (e) => {
        let value = e.target.value; 
        setTerm(value);
        // newly entered value will be captured under 'target.value'
        // This value will be made the new value with setTerm function
        // Next step is passing the new state to the input as the 'value' prop (the value attribute)
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                {/* HTML feature: When you have an input field inside a form and hit 'enter', Submit event will be triggered. Value in the input field will be disappeared. This is why we are using 'preventDefault' to prevent the default character. Because we are just developing a project where hitting enter should search and not perform their default action */}
                {/* We can do the same thing without forms but we will need a button where we will use onClick function */}
                <div>
                    <input value={term} onChange={handleChange} placeholder="Enter Search Term" />
                </div>
            </form>
        </div>
    )
}

// Steps to follow for form based inputs
    // 1. Creating a new piece of state
    // 2. Create an event handler to watch for the 'onChange' event
    // 3. When the 'onChange' event fires, get the value from the input
    // 4. Take the value from the input and use it to update your state
    // 5. Pass your state to the input as the value prop

// Explanation for this project
// 1. SearchBar.jsx: Create an input element and wrap it under form
// 2. When the user types something, we have to recognise that (virtual DOM) and update the (real DOM). 
    // To recognise that we use 'onChange' attribute in input element. 
    // To update that we use 'useState' (const [term, setTerm] = useState('');)
        // handleChange() is the reference to the event handler which will hold all the event related details. Using this function we can extract the value (e.target.value) and update that value as the new value with setTerm.
            // setTerm function updating the value will lead to change in value of 'term'. Now this value will be passed as 'value' attribute to the input element. 
            // This useState's job is done. (Until we do a search with different term)
// 3. Next step is submitting the form. We prevent the default behaviour with 'e.preventDefault()'. Then onSubmit(term) will be executed. See this is what is passed as prop from the app.jsx. We have destructured this in the argument of seachBar component itself. So in onSubmit(term), term has the latest updated value (e.target.value) that will be passed to the searchBarAPI where the term will be passed as 'params'.
// 4. We will extract the data from the output of searchBarAPI as 'response.data.results' and return that. A new useState is created ('const [images, setImages] = useState([]);'). Now 'results' value will be set as the new 'images' value using setImages. 
    // setTerms job is just to monitor the change in user input and update the value. 
    // SetImages job is to update the 'results' value (which is nothing but the information provdied by the API search about the 'term' value).
        // If the 'term' is ocean, all information about ocean (id, image-url, author, size, etc. ) will be returned back as a value. This is the value that is stored in the 'response.data.results'. If there are 10 images, you will have 10 objects in an array.
// 5. ImageList.jsx: We will iterate over this array using map() and extract the datas we needed. (In our case we are extracting image-url, id and alt-description) 
// 6. In imageList.jsx the term image doesn't depict the actual image itself. We are referring to one object in the array with the name 'image'. So dont get confused by that.
// 7. We are passing the individual object to the imageShow.jsx where individual image's url and alt-description is obtained which are stored in renderedImages.
// 8. Finally rendered images are retunred to the user