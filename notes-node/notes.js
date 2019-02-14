console.log("starting notes.js");
// var notes
var addNote = (title, body) => {
    console.log("Adding note,",title,body);
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