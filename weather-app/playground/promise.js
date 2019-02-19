var myPromise = new Promise((resolved, rejected) => {
    setTimeout(()=>{
        resolved("promise resolved !@_@");
        // rejected("promise not fullfilled!");
    },2700);
})

myPromise.then((message)=>{
    console.log(`Success: ${message}`);
},(error)=>{
    console.log(`Failed: ${error}`);
})