const yargs = require("yargs");
const axios = require('axios');

const argv = yargs.options({
    address: {
        describe: "Address to fetch weather for",
        demand: true,
        alias: 'a',
        string: true
    }
}).help().alias('help', 'h').argv;

var geoCodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=wSXd2GQf65NrXFrtSNdPYELYFzleAtH7&location=${encodeURIComponent(argv.address)}`

axios.get(geoCodeUrl).then((res) => {
    if (res.data.info.statuscode !== 0) {
        throw new Error("Address not found!")
    } else {
        const latitude = res.data.results[0].locations[0].latLng.lat;
        const longitude = res.data.results[0].locations[0].latLng.lng;
        var weatherUrl = `https://api.darksky.net/forecast/98c4b2c5882fb01bd601cd5640c25400/${latitude},${longitude}`
        
        console.log(`Address: ${res.data.results[0].locations[0].street ? res.data.results[0].locations[0].street + "," : ""}`
            + `${res.data.results[0].locations[0].adminArea5 ? res.data.results[0].locations[0].adminArea5 + "," : ""}`
            + `${res.data.results[0].locations[0].adminArea3 ? res.data.results[0].locations[0].adminArea3 + "," : ""}`
            + `${res.data.results[0].locations[0].adminArea1}`
            + `${res.data.results[0].locations[0].postalCode ? "-" + res.data.results[0].locations[0].postalCode : ""}.`)

        return axios.get(weatherUrl).then((response)=>{
            var temp = response.data.currently.temperature;
            var apparentTemp = response.data.currently.apparentTemperature;
            
            console.log(`It's currently ${temp}. It's feels like ${apparentTemp}.`)
        });
    }
}).catch((err) => {
    console.log(err.message)
})