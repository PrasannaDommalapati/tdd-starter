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
	decodeMorse,
	encodeMorse,
	stringIncrementer,
	rot13,
	inArray,
	isCheating,
	permutations
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

function decodeMorse(morseSentence) {

	let codeToAlpha =  {
		".-"   : "A", "-..." : "B", "-.-." : "C", "-.."  : "D", "."    : "E",
		"..-." : "F", "--."  : "G", "...." : "H", ".."   : "I", ".---" : "J",
		"-.-"  : "K", ".-.." : "L", "--"   : "M", "-."   : "N", "---"  : "O",
		".--." : "P", "--.-" : "Q", ".-."  : "R", "..."  : "S", "-"    : "T",
		"..-"  : "U", "...-" : "V", ".--"  : "W", "-..-" : "X", "-.--" : "Y",
		"--.." : "Z", "-----": "0", ".----": "1", "..---": "2", "...--": "3",
		"....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
		"----.": "9", "···−−−···"  : "SOS"
	};

	let decoded = [];

	let morseLetters = morseSentence.split('   ').map(c =>  c.split(' '))

	morseLetters.forEach((code,index) => {


		let letters = [];

		Object.values(code).forEach((key)=> {

			(codeToAlpha[key] !== 'undefined') && letters.push(codeToAlpha[key]);

		});

		decoded[index] = letters.join('');
	});

	return decoded.join(' ');
}


function encodeMorse(sentence) {

	let alphaToCode = {

		"A": ".-"   , "B": "-..." , "C": "-.-." , "D": "-.."  ,"E": "."    ,
		"F": "..-." , "G": "--."  , "H": "...." , "I": ".."   ,"J": ".---" ,
		"K": "-.-"  , "L": ".-.." , "M": "--"   , "N": "-."   ,"O": "---"  ,
		"P": ".--." , "Q": "--.-" , "R": ".-."  , "S": "..."  ,"T": "-"    ,
		"U": "..-"  , "V": "...-" , "W": ".--"  , "X": "-..-" ,"Y": "-.--" ,
		"Z": "--.." , "0": "-----", "1": ".----", "2": "..---","3": "...--",
		"4": "....-", "5": ".....", "6": "-....", "7": "--...","8": "---..",
		"9": "----.", "SOS":"···−−−···" ,' ':' '
	};

	let encoded = [];

	let letters= sentence.split('');

	letters.forEach((letter,index)=> encoded[index]=alphaToCode[letter]);

	return  encoded.join(' ');
}

function stringIncrementer(string) {

	let numberRemoved = string.replace(/\d+$/,'');

	let length = string.length - numberRemoved.length;

	let number = string.slice(numberRemoved.length) || '0';

	number = (parseInt(number)+1).toString();

	while(number.length <length) {

		number = '0' +number;
	}

	return numberRemoved.concat(number);
}


function rot13(word) {

	let input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

	return word.replace(/[A-Za-z]/g, (letter)=> {

		// return input.charAt(output.indexOf(letter));

		return output[input.indexOf(letter)];
	});

}

function inArray(arr1, arr2) {

	let result = [];

	!!arr1.length && arr1.forEach(arr1Word => {

		arr2.forEach(arr2Word =>{

			arr2Word.includes(arr1Word) && !result.includes(arr1Word) && result.push(arr1Word);

		});

	});

	return result.sort();

}

function isCheating(number) {
	let results = [];

	if(number > 0) {
		let sum = (number + 1) *number/2;

		let lBoundary  = Math.floor(((number - 1) * number/2)/(number + 1));
		let hBoundary  = Math.floor(Math.sqrt(sum+1) - 1);

		for(let x1 = lBoundary; x1 <hBoundary; x1++) {
			let x2 = Math.floor((sum -x1)/(x1 +1));
			(x1 + x2 + x1 * x2 === sum) && results.push([x1, x2]) && results.push([x2, x1]);
		}
	}
	results.sort((a,b)=> (a[0] >= b[0])? 1: -1);

	return results;

}

function permutations(string) {

	let distinct = {};

	recur(string, "").forEach(result => distinct[result] = true);

	return Object.keys(distinct);
}

function recur(string, prefix) {

	if (string.length === 0) {

		return [prefix];
	} else {

		let out = [];

		for (let i = 0; i < string.length; i++) {

			let pre = string.substring(0, i);
			let post = string.substring(i + 1);

			out = out.concat(recur(pre + post, string[i] + prefix));
		}

		return out.sort();
	}
}

