const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs.options({
    address: {
        describe: "Address to fetch weather for",
        demand: true,
        alias: 'a',
        string: true
    }
}).help().alias('help', 'h').argv;
geocode.geocodeAddress(argv.a, (errorMessage,result) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(result,undefined,2));
        weather.getWeather(result.latitude,result.longitude,(errorMessage,weatherResult)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResult.temperature}. It's feels like ${weatherResult.apparentTemperature}.`)
            }
        })
    }
});