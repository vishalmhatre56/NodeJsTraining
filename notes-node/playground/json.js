const fs = require("fs");

var noteObjecet = {
    title: "sec 23",
    body: "section 23 discription"
}

const originalObjectString = JSON.stringify(noteObjecet);
fs.writeFileSync("notes.json",originalObjectString);

var noteString = fs.readFileSync("notes.json");
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);