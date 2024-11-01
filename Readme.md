# CodeToCountry

**CodeToCountry** is a Node.js utility to convert country codes (ISO 3166-1 alpha-2) into readable country names. This lightweight package leverages an internal JSON file of country codes and names, providing an easy-to-use function for retrieving the country name based on a given code.

## Installation

Install the package with npm:

```bash
npm install codetocountry
```

## Usage

After installing, you can use the `getCountryName` function in your project. Import the function, pass an ISO country code, and it returns the corresponding country name.

### Example

```javascript
const { getCountryName, getCountryCode } = require('codetocountry');

console.log(getCountryName("US")); // Output: "United States"
console.log(getCountryCode("United States")); // Output: "US"
console.log(getCountryName("FR")); // Output: "France"
console.log(getCountryName("XX")); // Output: "Unknown country code"

```

## Function Reference

### `getCountryName(code)`

- **Description**: Returns the full country name for a given ISO 3166-1 alpha-2 country code.
- **Parameters**:
  - `code` (string): The two-letter country code.
- **Returns**: (string) The name of the country corresponding to the given code, or `"Unknown country code"` if the code isn't recognized.

## License

MIT License.

--- 

Let me know if you'd like to add any additional details, like a link to the list of supported country codes or contributing guidelines!
