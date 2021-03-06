const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=2d31d318735290dce8109b9bdd538ceb&query=' + latitude + ',' + longitude + '&units=f';

    console.log('latitude', latitude);
    console.log('longitute', longitude);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.weather_descriptions[0] + ' degress out. There is a ' + body.current.precip + '% chance of rain.' + "current humidity is " + body.current.humidity);
        }
    })
}

module.exports = forecast