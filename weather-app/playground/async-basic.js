console.log("starting app");
setTimeout(()=>{
    console.log("inside of callback");
},2000)
setTimeout(()=>{
    console.log("inside of 2nd callback");
},0)
console.log("ending up app");
