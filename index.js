'use strict';

exports.printMsg = function () {
	console.log("This is a message from the demo package");
}

function sum(a, b) {
  return a + b;
}
module.exports = sum;