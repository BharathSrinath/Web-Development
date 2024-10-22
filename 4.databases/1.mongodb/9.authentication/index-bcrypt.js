// To run this, "nodemon index-bcrypt.js"

const bcrypt = require('bcrypt');

// Technique 1 (generate a salt and hash on separate function calls):

    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    //         // Store hash in your password DB.
    //     });
    // });

// saltRounds: Think of it as a difficulty level for the hash. Recommended number is 12. Higher you go, greater the time it will take to hash the password. Up to 14 our system was realtively quick. But then number sof econds to hash the password increased drastically. 
// saltRounds that is passed to genSalt() is not going to take time. It is almost instant. But the salt value (that is created with higher saltRounds value) when passed to the hash() function will take a significant amount of time to complete the hashing process. 
    // Example: In our test case, a value of 15 took 5.7 seconds, 16 took 10.5 seconds, 17 took 20 seconds and 18 took 40 seconds.
// Official data on rounds
    // rounds=8 : ~40 hashes/sec
    // rounds=9 : ~20 hashes/sec
    // rounds=10: ~10 hashes/sec
    // rounds=11: ~5  hashes/sec
    // rounds=12: 2-3 hashes/sec
    // rounds=13: ~1 sec/hash
    // rounds=14: ~1.5 sec/hash
    // rounds=15: ~3 sec/hash
    // rounds=25: ~1 hour/hash
    // rounds=31: 2-3 days/hash

// Below example uses the same technique but also incoprates async/await while default technique given above uses call-back functions 
// const hashPassword = async (pw) => {
    // pw is the password entered by the user
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

// Technique 2 (auto-gen a salt and hash):

    // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    //     // Store hash in your password DB.
    // });

const hashPassword = async (pw) => {
    //Pass in the plain text password and the number of rounds:
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}
// This hash value will be stored in database
// Now we have to write some other lines of coding to store this value in a database if the user is creating or updating the password.
// Also other lines of code to pass the value to the compare() when the user is logging-in.

// To check a password:

    // Load hash from your password DB.
    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    //     // retuns true
    // });
    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    //     // retuns false
    // });

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}

hashPassword('monkey');

login('monkey', '$2b$12$YS9GdWUznoM7r1522knuY.1dq1taWra5zgG7N1WzHs4j.fridopWS')
// We are just assuming that the hashed value is retrieved from a database.  