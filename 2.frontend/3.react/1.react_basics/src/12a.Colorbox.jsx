import { useState } from "react";
import "./12.ColorboxProject.css"

const RandColors = (array) =>  {
    return array[Math.floor(Math.random() * array.length)];
}

export default function Colorbox({colors}) {
    const [color, setColor] = useState(RandColors(colors));
    
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
