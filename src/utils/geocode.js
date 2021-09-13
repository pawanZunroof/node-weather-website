const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicGF3YW56dW5yb29mIiwiYSI6ImNrdGUxajE2MDAwY2IycHFycXozbGh5azEifQ.IpWPZFv33mjr87_d_f_LhA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        console.log('body', body);
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode