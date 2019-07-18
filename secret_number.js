"use strict";
module.exports = function() {
  // Store Random number in variable
  let generatedNumber = Math.floor(Math.random() * 20);

  // Create function to call stored number
  let storedNumber = function() {
    return generatedNumber;
  };

  return storedNumber;
};
