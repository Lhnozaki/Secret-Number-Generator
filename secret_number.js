'use strict';
module.exports = function() {

  // Create Random Number
  let secretNumber = function() {
    return Math.floor(Math.random() * 20)
  };

  // Store Random number in variable
  let generatedNumber = secretNumber();

  // Create function to call stored number
  let storedNumber = function() {
    return generatedNumber;
  }

  return storedNumber;

};






