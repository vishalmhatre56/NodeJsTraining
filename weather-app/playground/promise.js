var addNumbers = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof x === "number" && typeof y === "number") {
                resolve(x + y);
            } else {
                reject("Arguments must be numbers.")
            }
        }, 1400);
    })
}

addNumbers(5, "5")
    .then((result) => {
        console.log(`Result: ${result}`)
        return addNumbers(result, 33);
    })
    .then((res) => {
        console.log("+33 will be:", res)
    })
    .catch((err) => {
        console.log(err)
    })

// var myPromise = new Promise((resolved, rejected) => {
//     setTimeout(()=>{
//         resolved("promise resolved !@_@");
//         // rejected("promise not fullfilled!");
//     },2700);
// })

// myPromise.then((message)=>{
//     console.log(`Success: ${message}`);
// },(error)=>{
//     console.log(`Failed: ${error}`);
// })