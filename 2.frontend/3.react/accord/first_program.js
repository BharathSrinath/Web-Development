// usage of variables
console.log("usage of variables");
var a = 45;
var $b = 20;
var _c = 10;
var d = a + $b + _c;
console.log("Sum: "+d);

// for of loop
console.log("for of loop");
var a1 = [4,7,98,12,45,23];
for (let i of a1){
    console.log(i);
}

// flat()
console.log("flat()");
var array1 = [[1,2,3,4], [5,6,7,8]];
console.log(array1);
var array2 = array1.flat();
console.log(array2);

//map()
console.log("map()");
var array3 = [4,7,2,3,1];
var array4 = array3.map(i => {
    let e = i**2;
    return e;
})
console.log("Square of a number: "+array4+"\n");

// Print all the even numbers from an array using map()
var array5 = [1, 5, 4, 7, 10, 2, 23, 13];
var array6 = array5.map(i => {
    if(i % 2 == 0){
        return i;
    }
})
console.log("Even numbers in an array: "+ array6+"\n");

//Get the input from the user and sort the array in reverse array
array5.sort((a,b) => a - b).reverse();
console.log("Sorted and reversed: "+array5+"\n");

// Print all the prime numbers from an array
var array7 = [];
for (let i = 0; i < array5.length; i++) {
    let number = array5[i];
    let isPrime = true;
  
    if (number <= 1) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(number); j++) {
        if (number % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
  
    if (isPrime) {
        array7.push(number);
    }
  }
console.log("Prime Numbers: "+array7+"\n");

// Store all the values in an array and divide each value by array length using map()
var array7 = [10, 20, 30, 40, 60];
var array8 = array7.map(i => {
    return i/array7.length;
})
console.log("Array after dividing by array length: "+array8+"\n");