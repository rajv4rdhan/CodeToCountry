const countryCodes = require('./countryCodes.json');

function getCountryName(code) {
    const country = countryCodes.find(country => country.code === code.toUpperCase());
    return country ? country.name : "Unknown country code";
}

module.exports = getCountryName;