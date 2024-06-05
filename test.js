const countrys = [
    { cid: 1, cname: 'USA', ccall: '+1', ccurrency: 'USD' },
    { cid: 2, cname: 'Canada', ccall: '+1', ccurrency: 'CAD' },
    { cid: 3, cname: 'United Kingdom', ccall: '+44', ccurrency: 'GBP' },
    { cid: 4, cname: 'Australia', ccall: '+61', ccurrency: 'AUD' },
  ];
  


// selectedCountry = countrys.find(country => country.cid == newValue);

// Function to find a country by cid
function findCountryById(countries, id) {
    return countries.find(country => country.cid === id);
  }
  
  // Example usage
  const selectedCountryId = 2; // Suppose we want to find the country with cid 3
  
  const selectedCountry = findCountryById(countrys, selectedCountryId);
  
//   if (selectedCountry) {
//     console.log(`Selected Country: ${selectedCountry.cname}`);
//     console.log(`Country Call Code: ${selectedCountry.ccall}`);
//     console.log(`Country Currency: ${selectedCountry.ccurrency}`);
//   } else {
//     console.log(`Country with ID ${selectedCountryId} not found.`);
//   }
  

  console.log(selectedCountry)