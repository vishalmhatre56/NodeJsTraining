const request = require("request");

const geocodeAddress = (address, callback) => {
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=wSXd2GQf65NrXFrtSNdPYELYFzleAtH7&location=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect maps api server");
        } else if (response.statusCode !== 200) {
            callback("Address not found!")
        } else {
            callback(undefined, {
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    })
}

module.exports = {
    geocodeAddress
}