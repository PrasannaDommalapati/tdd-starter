module.exports = {
	sum,
	isMultipleOfThree,
	multiple3or5
};

function sum(number1, number2) {

	return number1 + number2;

}

function isMultipleOfThree(number) {

	return (number % 3 === 0);
}

function multiple3or5(number) {

	let total = 0;

	for (let i = 0; i <= number; i++) {

		if ((i % 3 === 0) || (i % 5 === 0)) {

			total += i;
		}
	}

	return total;
}

