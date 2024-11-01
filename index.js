const countryCodes = require('./countryCodes.json');

/**
 * Get the country name from the provided ISO alpha-2 country code.
 * @param {string} code - The ISO 3166-1 alpha-2 country code.
 * @returns {string} - The name of the country, or "Unknown country code" if the code is not found.
 */
function getCountryName(code) {
    const country = countryCodes.find(country => country.code === code.toUpperCase());
    return country ? country.name : "Unknown country code";
}

/**
 * Get the country code from the provided country name.
 * @param {string} name - The full name of the country.
 * @returns {string} - The ISO alpha-2 country code, or "Unknown country name" if the name is not found.
 */
function getCountryCode(name) {
    const country = countryCodes.find(country => country.name.toLowerCase() === name.toLowerCase());
    return country ? country.code : "Unknown country name";
}

// Export both functions
module.exports = {
    getCountryName,
    getCountryCode
};
