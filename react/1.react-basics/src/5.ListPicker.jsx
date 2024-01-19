export default function ListPicker ({values}){
    const randIndex = Math.floor(Math.random() * values.length);
    const randEl = values[randIndex];
    return (
    <>
        <p>The list of values: {values} </p>
        <p>Random element is: {randEl} </p>
    </>
    )
}