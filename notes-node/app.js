console.log("starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];
console.log("command:", command);

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added");
        notes.logNote(note);
    } else
        console.log("Title is already used!")
} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note Found")
        notes.logNote(note);
    }
    else
        console.log("Note not found!")
} else if (command === "remove") {
    var removeResult = notes.remove(argv.title)
    console.log(removeResult ? `Note removed!` : 'Note with given titile dose not exist!')
} else
    console.log("command not recognized");