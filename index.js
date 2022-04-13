const fs = require("fs");

const inverseCaptcha = (input) => {
	// Split input into array of individual digits
	const separatedDigits = input.split("");

	// Return new array of digits where a pair is found
	const pairedDigits = separatedDigits.filter((currentDigit, index) => {
		let nextDigit = "";

		// Conditional logic to account for snaky looping
		if (index === separatedDigits.length - 1) {
			nextDigit = separatedDigits[0];
		} else {
			nextDigit = separatedDigits[index + 1];
		}

		return currentDigit === nextDigit;
	});

	// This isn't relevant for the challenge but I used it for my TDD 😇
	if (pairedDigits.length === 0) {
		return 0;
	}

	// Convert each pairedDigit element to a number to allow us to sum up the digits
	const numifiedDigits = pairedDigits.map((number) => {
		return +number;
	});

	// This is me using reduce() for the first time 🥲
	const result = numifiedDigits.reduce((prevNum, currentNum) => {
		return prevNum + currentNum;
	});

	return result;
};

// Comment out this chunk if you want to run the test suite
fs.readFile("./input.txt", "utf-8", (err, puzzleInput) => {
	if (err) {
		console.log(err);
	} else {
		console.log(inverseCaptcha(puzzleInput));
	}
});

module.exports = inverseCaptcha;
