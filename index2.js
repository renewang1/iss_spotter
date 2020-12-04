const { nextISSTimesForMyLocation } = require('./iss_promised');

const printTimes = (times) => {
  for (let item of times) {
    const date = new Date(0);
    date.setUTCSeconds(item.risetime);
    const dur = item.duration;
    console.log(`Next pass at ${date} for ${dur} seconds`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimes(passTimes);
  });