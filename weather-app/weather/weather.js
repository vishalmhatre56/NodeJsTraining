const request = require("request");

var getWeather = (latitude,longitude,callback) =>{
    request({
        url: `https://api.darksky.net/forecast/98c4b2c5882fb01bd601cd5640c25400/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error || response.statusCode!==200){
            callback("Unable to get forcast data!")
        }else{
            callback(undefined,body.currently)
        }
    })
}

module.exports = {
    getWeather
}
