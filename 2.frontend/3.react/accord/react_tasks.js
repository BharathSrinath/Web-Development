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

// 18/07/2024
//  1. print 5 student id,name,dept,yop using objects and print all the student id
const students = {
  student1: {
    id: 902295,
    name: "Aravind",
    department: "IT",
    year_of_passing: 2020
  },
  student2: {
    id: 902296,
    name: "Margrave",
    department: "CSE",
    year_of_passing: 2017
  },
  student3: {
    id: 902297,
    name: "Akshaya",
    department: "Civil",
    year_of_passing: 2019
  },
  student4: {
    id: 902298,
    name: "Thendral",
    department: "EEE",
    year_of_passing: 2021
  },
  student5: {
    id: 902299,
    name: "Bharath",
    department: "ECE",
    year_of_passing: 2016
  },
}
console.log("Student Details:");
console.log("\n");
for (let student in students){
  let studentDetails = students[student];
  console.log("Id: "+studentDetails.id);
  console.log("Name: "+studentDetails.name);
  console.log("Department: "+studentDetails.department);
  console.log("Year of Passing: "+studentDetails.year_of_passing);
  console.log("-----------------------");
}
// 2. store the employee basic salary,bonus,and loss of pay in objects using functions calculate the total salary
// 3. calculate the perday salary and per hour salary of an employee using objects and functions
function employees(basicSalary, bonus, lossOfPay) {
  return {
      basicSalary: basicSalary,
      bonus: bonus,
      lossOfPay: lossOfPay
  };
}
function calculateTotalSalary(employee) {
  return employee.basicSalary + employee.bonus - employee.lossOfPay;
}
let employee = employees(98564, 24567, 7589);
let totalSalary = calculateTotalSalary(employee);
let perDaySalary = (totalSalary/22).toFixed(2); 
let perHourSalary = (perDaySalary/8).toFixed(2);
console.log("Total Salary of the employee: " + totalSalary);
console.log("Per-day Salary of the employee: " + perDaySalary);
console.log("Per-hour Salary of the employee: " + perHourSalary);