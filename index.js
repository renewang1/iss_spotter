// index.js
const { nextISSTimesForMyLocation } = require('./iss');

const printTimes = (times) => {
  for (let item of times) {
    const date = new Date(0);
    date.setUTCSeconds(item.risetime);
    const dur = item.duration;
    console.log(`Next pass at ${date} for ${dur} seconds`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printTimes(passTimes);
});