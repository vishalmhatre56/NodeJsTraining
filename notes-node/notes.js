console.log("starting notes.js");
const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    }

    try{
        var noteString = fs.readFileSync("notes-data.json");
        notes = JSON.parse(noteString); 
    }catch(e){

    }
    var duplicateNotes = notes.filter((n)=> n.title===title);
    
    if(duplicateNotes.length===0){
        notes.push(note);
        fs.writeFileSync("notes-data.json", JSON.stringify(notes));    
    }
}
var getAll = () => {
    console.log("list..");
} 
var read = (title) => {
    console.log("reading.."+title);
} 
var remove = (title) => {
    console.log("removing.."+title);
} 
module.exports = {
    addNote,
    getAll,
    read,
    remove
};