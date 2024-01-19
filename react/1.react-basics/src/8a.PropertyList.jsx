export default function PropertyList({ propName, price, rating }) {
    return (
        <div className="PropertyList">
            <h2>{propName}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}⭐️</h4>
        </div>
    );
}