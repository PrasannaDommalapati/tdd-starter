let pdfUtil = require('pdf-to-text');
let pdfParser= require('pdf-parser');

function PdfToTextController() {

	function pdfToText(pdf_path) {

		return pdfUtil.pdfToText(pdf_path, (err, data) => {
			console.log(err)

			!err && console.log(data);
		});

	}

	function pdfInfo(pdf_path) {

		return pdfUtil.info(pdf_path, (err, data) => {
			console.log('err',err)


			!err && console.log(data);
		});
	}

	function parse(path) {

		let results = [],
		       data = [];

		// create promise

		let promise = new Promise((resolve) => {

			return pdfParser.pdf2json(path,(error, pdf) => {

				resolve(pdf.pages.forEach((text, index) => Object.entries(text)[3][1].forEach(sub => results.push(sub.text))));
			});
		});

		return promise.then(() =>results);
	}


	return { pdfInfo, pdfToText,parse}
}

module.exports = PdfToTextController();