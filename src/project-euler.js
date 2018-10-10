module.exports = {
	sum,
	isMultipleOfThree,
	multiple3or5,
	divisibleByOneToTwenty,
	sumOfLowestIntegers,
	twoToOne,
    vowelCount,
    consonantCount,
    xoCount,
    removeSmallest,
	friendOrFoe
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

function divisibleByOneToTwenty(max) {

	let i = 1;

	while (i %  2 != 0 || i %  3 != 0 || i %  4 != 0 || i %  5 != 0 ||
		   i %  6 != 0 || i %  7 != 0 || i %  8 != 0 || i %  9 != 0 ||
		   i % 10 != 0 || i % 11 != 0 || i % 12 != 0 || i % 13 != 0 ||
		   i % 14 != 0 || i % 15 != 0 || i % 16 != 0 || i % 17 != 0 ||
		   i % 18 != 0 || i % 19 != 0 || i % 20 != 0 ){
		i++;
	}

	return i;

}

function sumOfLowestIntegers(numbers) {

	numbers.sort((a,b)=>a-b);

	return numbers[0] + numbers[1];
}

function twoToOne(str1, str2) {

    return str1.concat(str2)
		.split('')
		.sort()
		.filter((item, index, self) => self.indexOf(item) == index)
		.join('');
}

function vowelCount(name) {

	let vowelMatch = name.match(/[aeiou]/gi);
	return (vowelMatch == null) ? 0:vowelMatch.length;
}
function consonantCount(name) {

	let consonantMatch = name.match(/[b-df-hj-np-tv-z]/gi);
	return (consonantMatch == null) ? 0 : consonantMatch.length;
}
function xoCount(xoString) {

    let xCount = 0,
        oCount = 0;

    xoString.toLowerCase().split('').filter(char => {
        char === 'x' && xCount++;
        char === 'o' && oCount++;
    });

    return xCount === oCount;
}
function removeSmallest(numbers) {

    let smallest = numbers.indexOf( Math.min(...numbers) );
    return numbers.slice( 0, smallest ).concat( numbers.slice( smallest + 1 ) )

}

function friendOrFoe(friendNames) {

	let fof = [];

	friendNames.forEach(friend => {

		(friend.length === 4) && fof.push(friend);
	});

	return fof;
}