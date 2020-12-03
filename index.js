// index.js
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// let IP = '';
// let latLong = {latitude: 43.6644, longitude: -79.4195};

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   IP = ip;
//   console.log(ip);
// });

// fetchCoordsByIP(IP, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   // latLong = coords;
//   console.log('It worked! Returned coordinates:' , coords);
// });

// fetchISSFlyOverTimes(latLong, (error, flyOvers) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(flyOvers);
// });