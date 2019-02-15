console.log("starting notes.js");
const fs = require('fs');

const fetchNotes = () => {
    try{
        var noteString = fs.readFileSync("notes-data.json");
        return JSON.parse(noteString); 
    }catch(e){
        return [];
    }
}
const saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));    
}
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter((n)=> n.title===title);

    if(duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
var getAll = () => {
    console.log("list..");
} 
var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.find((n)=> n.title === title);
    return note;
} 
var remove = (title) => {
    var notes = fetchNotes();
    var filterdedNotes = notes.filter((n)=> n.title !== title);
    saveNotes(filterdedNotes);
    
    return !(notes.length === filterdedNotes.length);
} 
var logNote = (note) => {
    console.log(`-----\nTitle: ${note.title}\nBody: ${note.body}`)
}
module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
    logNote,
};