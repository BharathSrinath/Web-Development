import Colorbox from "./12a.Colorbox";
import "./12.ColorboxProject.css"

export default function Colorboxes({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<Colorbox colors={colors} key={i} />);
    }
    // You know the assigning index to key is not a good practice. This is just for temporary purpose.
        // In react we might change the position of the objects if requirements arise. So their index will change too.
    return <div className="colorboxgrid">{boxes}</div>;
}