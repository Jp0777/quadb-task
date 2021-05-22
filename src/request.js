const request = require('request')

const req = () => {
    return new Promise((resolve, reject) => {
        request('https://api.wazirx.com/api/v2/tickers', (err, res, body) => {
            if (err)
                return reject("Something went wrong");
            const data = JSON.parse(body)
            resolve(data);
        })
    })
}
module.exports = req;