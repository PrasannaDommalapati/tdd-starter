function CodewarsController() {

	function inArray(array1, array2) {

		let result = [];

		!!array1.length && array1.forEach(arr1Word => {

			array2.forEach(arr2Word => {

				arr2Word.includes(arr1Word) && !result.includes(arr1Word) && result.push(arr1Word);

			});

		});

		return result.sort();

	}

	function rot13(word) {

		let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

		return word.replace(/[A-Za-z]/g, (letter) => {

			// return input.charAt(output.indexOf(letter));

			return output[input.indexOf(letter)];
		});

	}

	function isInteresting(number, awesomePhrases) {

		isPalindrome(number)

	}

	function isPalindrome(num) {

		let number = num.toString().split('');
		let numberArr = number.map(Number);

		let reverseArr = numberArr.reverse();

		let result = false;

		numberArr.forEach((e1, i) => reverseArr.forEach(e2 => {

			if (e1.length > 1 && e2.length) {
				result = compare(e1, e2);
			} else if (e1 !== e2) {
				result = false
			} else {
				result = true
			}
		}))

		return result;
	}
	const greedIsGood = (dice) => {

		let sum =0;
		let counts = {};
		for (let i = 0; i < dice.length; i++) {
			var num = dice[i];
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}

		if(counts[1] == 3)
		sum += 1000;
		if(counts[6] == 3)
		sum += 600;
		if(counts[5] == 3)
		sum += 500;
		if(counts[4] == 3)
		sum += 400;
		if(counts[3] == 3)
		sum += 300;
		if(counts[2] == 3)
		sum += 200;
		if(counts[1] == 1)
		sum += 100;
		if(counts[5] == 1)
		sum += 50;

		return sum;
	}

	return {
		rot13,
		inArray,
		isInteresting,
		greedIsGood
	}
}

module.exports = CodewarsController();