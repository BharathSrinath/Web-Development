// It demonstrates a simple game. When you roll two dice and both has same number, then 'you win!' text will be displayed and the entire div element will be in green else div element will be in red.
export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2;
  // isWinner will hold boolean value
  const styles = { color: isWinner ? "green" : "red" };
  return (
    <div style={styles}>
      <h2>Double Dice</h2>
      {isWinner && <h3>You win!</h3>}
      {/* You know how the && works right? If the first condition is false, second condition will not even be checked. We are doing this to avoid adding empty h3 element when we loose the game.*/}
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
    </div>
  );
}