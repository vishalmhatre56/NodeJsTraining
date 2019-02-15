const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require("./notes.js");
const titleOptions = {
    describe:"Title of note.",
    demand:true,
    alias: 't'
};
const bodyOptions = {
    describe:"Body of note.",
    demand:true,
    alias: 'b'
};

const argv = yargs.command("add","Add a new note.",{
    title: titleOptions,
    body: bodyOptions,
})
.command("list","List all notes.")
.command("read","Read a note.",{
    title: titleOptions
})
.command("remove","Remove a note.",{
    title: titleOptions
}).argv;
var command = argv._[0];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added");
        notes.logNote(note);
    } else
        console.log("Title is already used!")
} else if (command === "list") {
    var allNotes = notes.getAll();
    if (allNotes.length > 0) {
        console.log(`Printing ${allNotes.length} note${allNotes.length > 1 ? "s" : ""}`);
        allNotes.filter((note) => notes.logNote(note))
    } else
        console.log("List is empty")
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