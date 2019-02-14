console.log("starting app");

// const fs = require("fs");
// const os = require("os");
// const notes = require("./notes.js")
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString("stringsd"))
const filterdArray = _.uniq(["The","Vish",1,"Vish",1,2,3,4,"Pro"]);
console.log(filterdArray);

// const sum = notes.add(9,-2);
// console.log(sum);

// const user=os.userInfo();
// fs.appendFile('greetings.txt',`Hello ${user.username}!`);