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
	friendOrFoe,
	openOrSenior,
	anagrams,
	isValidWalk,
	iqTest,
	iqTest2,
	sortArray,
	camelCase,
	snakeToCamelCase,
	encodeMorse,
	decodeMorse
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

function openOrSenior(list) {

	// let result = [];
	//
	// list.forEach(sublist =>{
	//
	// 	if((sublist[0] >=55) && (sublist[1] >7)) {
	//
	// 		result.push('Senior');
	// 	} else {
	// 		result.push('Open');
	// 	}
	//
	// });

	 return list.map(([age,handicap]) => (age >= 55 && handicap >7) ? 'Senior': 'Open');

}

function anagrams(word, words) {

	return words.filter(item => {
		return item.split('').sort().join('') === word.split('').sort().join('');
	});
}

function isValidWalk(walk) {

	let north = 0,
		south = 0,
		west  = 0,
		east  = 0;

	for (let i = 0; i < walk.length; i++) {

		switch(walk[i]){
			case 'n':
				north++;
				break;
			case 's':
				south++;
				break;
			case 'w':
				west++;
				break;
			case 'e':
				east++;
				break;
			default:
				return false;
		}
	}

	return  (walk.length === 10) && (north === south && east === west);
}

function iqTest(numbers) {

	let odPos = [],
	evenPos = [];

	numbers.forEach((number,index) => {

		(number % 2 === 1) && odPos.push(index);
		(number % 2 === 0) && evenPos.push(index);
	});

	return odPos.length < evenPos.length ? odPos[0]: evenPos[0];
}

function iqTest2(numbers) {


	let odPos = [],
		evenPos = [];

	let numArray = numbers.split(' ');
	numArray.map((number, index) => {

		(number % 2 === 1) && odPos.push(index+1);
		(number % 2 === 0) && evenPos.push(index+1);
	});

	return odPos.length < evenPos.length ? odPos[0]: evenPos[0];

}

function sortArray(array) {

	let evenArr = [],
		 oddArr = [],
		 result = [];

	array.forEach((number, index) => {

		(number %2 === 0) && evenArr.push(array[index]);
		(number %2 !== 0) && oddArr.push(array[index]);
	});

	oddArr.sort((a, b) => a - b);

	array.forEach(number => {

		(number %2 === 0) && result.push(evenArr.shift());
		(number %2 !== 0) && result.push(oddArr.shift());
	});

	return result;
}

function camelCase(str) {

	return str.split(' ').map((word, index) => {

		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

	}).join('');
}

function snakeToCamelCase(snakeString) {

	return snakeString.split('_').map((word, index) => {

		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

	}).join('');

}

function decodeMorse(codes) {

	let codeToAlpha =  {
		".-"   : "A", "-..." : "B", "-.-." : "C", "-.."  : "D", "."    : "E",
		"..-." : "F", "--."  : "G", "...." : "H", ".."   : "I", ".---" : "J",
		"-.-"  : "K", ".-.." : "L", "--"   : "M", "-."   : "N", "---"  : "O",
		".--." : "P", "--.-" : "Q", ".-."  : "R", "..."  : "S", "-"    : "T",
		"..-"  : "U", "...-" : "V", ".--"  : "W", "-..-" : "X", "-.--" : "Y",
		"--.." : "Z", "-----": "0", ".----": "1", "..---": "2", "...--": "3",
		"....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
		"----.": "9"
	};

	let decoded = [];

	 codes.split('   ').map(c => c.split(' ')).forEach(code=> {

	 	code.map(value => {

		return (typeof codeToAlpha[value] === 'undefined') ? '' : decoded.push(codeToAlpha[value]);
		});
	});

	 return decoded.join('');
}


function encodeMorse(code) {

	let alphaToCode = {
		'a': '._',    'b': '_...',  'c': '_._.',  'd': '_..',   'e': '.',     'f': '.._.',
		'g': '__.',   'h': '....',  'i': '..',    'j': '.___',  'k': '_._',   'l': '._..',
		'm': '__',    'n': '_.',    'o': '___',   'p': '.__.',  'q': '__._',  'r': '._.',
		's': '...',   't': '_',     'u': '.._',   'v': '..._',  'w': '.__',   'x': '_.._',
		'y': '_.__',  'z': '__..',  '0': '_____', '1': '.____', '2': '..___', '3': '...__',
		'4': '...._', '5': '.....', '6': '_....', '7': '__...', '8': '___..', '9': '____.'
	};

	let encoded = [];

	code.split(' ').map(c => c.split(' ')).forEach(char=> {

		return (typeof alphaToCode[char] === "undefined") ? "": encoded.push(alphaToCode[char]);

	});

	console.log(encoded);

	return encoded.join('');

}