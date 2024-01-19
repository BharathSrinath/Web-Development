import PropertyList from "./8a.PropertyList";
import "./8.Property.css";
export default function Property({ items }) {
    return (
        <div className="Property">
          {items.map((i) => {
            return <PropertyList {...i} key={i.id} />;
          })}
        </div>
      );
  }