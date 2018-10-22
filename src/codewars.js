function CodewarsController() {

	function inArray(array1, array2) {

		let result = [];

		!!array1.length && array1.forEach(arr1Word => {

			array2.forEach(arr2Word =>{

				arr2Word.includes(arr1Word) && !result.includes(arr1Word) && result.push(arr1Word);

			});

		});

		return result.sort();

	}

	function rot13(word) {

		let input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

		return word.replace(/[A-Za-z]/g, (letter)=> {

			// return input.charAt(output.indexOf(letter));

			return output[input.indexOf(letter)];
		});

	}


	return {

		rot13,
		inArray
	}
}

module.exports = CodewarsController();