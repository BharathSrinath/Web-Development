// When you call console.log() and pass a value or expression as its argument, that value or expression will be printed to the console. This allows you to inspect and debug your code by outputting messages, variable values, or any other information you want to track during the execution of your JavaScript program.
console.time("This entire code took....");
console.log("first file of javascript");
console.log('Hello world');
// Whatver in the double quotes (""), single quotes ('') and backtick (``) will be displayed as it is. Generally you will double and single quotes. But when you want to use any special characters or even double and single quotes in the content a backtick is preferred.
console.log(`Prerak's world`);
console.log(100+2);  // This will be displayed as 102
console.log(100-2);
console.log(100*2);
console.log(100/2);
console.log(100%2);
console.log("100%2"); // This will be treated as string and will be displayed as 100%2
console.log([10,20,30,40,50]); // It is an array that can store and display multiple values
console.log([10,"hello world",30,40,50]);
console.log({course: 'fullstack', ratings: '5'});
console.table({course: 'fullstack', ratings: 5}); // It will displayed in a tabular format
console.warn("This is a warning"); // .warn will be displayed in yellow to mark something as warning
console.error("This is big error"); // red color
console.timeEnd("This entire code took....");
// It shows the time taken for the code to run that is between between console.time and console.timeEnd
console.clear(); // It will clear all console