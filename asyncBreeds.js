const fs = require('fs');

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // change: pass the data into the callback function instead of returning in directly
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};
// Move the console into a new function
const printOutCatBreed = breed => {
  console.log('Return value: ', breed) //print out details correctly
};
// passing to arguements in printDetailsFromFile: breed string and callback function
breedDetailsFromFile('Bombay', printOutCatBreed);