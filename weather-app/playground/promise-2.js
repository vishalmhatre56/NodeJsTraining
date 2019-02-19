const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=wSXd2GQf65NrXFrtSNdPYELYFzleAtH7&location=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect maps api server");
            } else if (body.info.statuscode !== 0) {
                reject("Address not found!")
            } else {
                console.log(`Address:${body.results[0].locations[0].adminArea5},${body.results[0].locations[0].adminArea3},${body.results[0].locations[0].adminArea1}.`)
                resolve({
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            }
        })
    })
}

geocodeAddress('thane').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
},(error)=>{
    console.log(error);
})