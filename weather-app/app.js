const yargs = require("yargs");
const request = require("request");
const geocode = require("./geocode/geocode.js");

const argv = yargs.options({
    address: {
        describe: "Address to fetch weather for",
        demand: true,
        alias: 'a',
        string: true
    }
}).help().alias('help', 'h').argv;
//98c4b2c5882fb01bd601cd5640c25400
//https://darksky.net/forecast/28.6573,77.2273/si12/en
geocode.geocodeAddress(argv.a, (errorMessage,result) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(result,undefined,2));
        request({
            url: `https://api.darksky.net/forecast/98c4b2c5882fb01bd601cd5640c25400/${result.latitude},${result.longitude}`,
            json: true
        }, (error, response, body) => {
            if(error || response.statusCode!==200){
                console.log("Unable to get forcast data!");
            }else{
                console.log(JSON.stringify(body.currently,undefined,2));
            }
        })
    }
});