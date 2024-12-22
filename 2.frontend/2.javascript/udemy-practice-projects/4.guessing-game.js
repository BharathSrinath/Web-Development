// My code

// let max = prompt("Welcome! Enter your max number");
// let answer = Math.floor(Math.random() * max) + 1;
// let count = 0;
// let guess = prompt("Make your guess");
// while (true) {
//   if (guess === 'q') {
//     console.log("OK, YOU QUIT!");
//     break;
//   } else if (guess > answer) {
//     while (guess > answer) {
//       guess = prompt("Try a lower number");
//       count++;
//     }
//   } else if (guess < answer) {
//     while (guess < answer) {
//       guess = prompt("Try a higher number");
//       count++;
//     }
//   } else {
//     count++;
//     console.log(prompt("CONGRATS YOU WIN!"));
//     console.log(prompt(`You got it! It took you ${count} guesses`));
//     break;
//   }
// }

// Teacher's code
// Look how efficient and more isnightful his code is
// You didnt think about scenario where the user may enter a string. 
// Also you have unecessarily grouped all conditions into while. And made extra 2 while loops for lesser and greater block

let maximum = parseInt(prompt("Enter the maximum number!"));
// we are trying to convert entered value from string to a number.
// That is if the user has not enterad a number and entered a string, parseInt will return NaN which is falsy in JS and that boolean value will be stored in maximum
// We are using that return value within while. As you know Nan is falsy When you negate false (that is while is true), it will execute the following
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess1 = prompt("Enter your first guess1! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess1) !== targetNum) {
    // we are doing the parseInt again because, initial parseInt was for the max value. But here you are going to renter the values again and again and every tume you need to check whether the entered value is a string or not
    if (guess1 === 'q') break;
    guess1 = parseInt(guess1);
    if (guess1 > targetNum) {
        guess1 = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess1 < targetNum) {
        guess1 = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess1 = prompt("Invalid guess1. Please enter a number or 'q' to quit");
    }
}

if (guess1 === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}


