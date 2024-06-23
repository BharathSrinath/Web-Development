import { useState } from "react";
import "./12.ColorboxProject.css"

const RandColors = (array) =>  {
    return array[Math.floor(Math.random() * array.length)];
}

export default function Colorbox({colors}) {
    const [color, setColor] = useState(RandColors(colors));
    // Be careful when you are pasing function as your initial state.
    // In this project we want the function to run everytime when we reload the page to provide us with random colors. 
    // But in general, we would want them to execute only once (as an initial value)
        // Hence make sure that you are passing the reference to the function and not executing it. (remove the paranthesis) 
    const changeColor = () => {
        setColor(RandColors(colors));
    }

    return (
        <div className="colorbox"
            style={{ backgroundColor: color }}
            onClick={changeColor}>
        </div>
    )
}
