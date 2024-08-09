// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const franc = require("franc");
// It is used to detect the language of a given text and provides a 3 letter output (eng, spa, etc.)
const langs = require("langs");
// it returns a language code like ‘eng’ for English, ‘spa’ for Spanish, etc.
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    // If it can't find the language, it returns und(undetermined/undefined)
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    const language = langs.where("3", langCode);
    // Here 3 indicates the type of language code that we are providing to the function. 
    // 'lang' supports 1, 2 or 3 letter codes. Since franc returns a 3 letter code, we are providing 3 as the value here.
    console.log(`Our best guess is: ${language.name}`.green)
    // langCode returns an object with many prorpeties from which we are accessing 'name'
}

// $ node index.js "சிந்தனைகளின் அலைகள்"
    // Our best guess is: Tamil

