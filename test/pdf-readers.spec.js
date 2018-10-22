import * as PdfToTextController from '../src/pdf-reader';

const pdf_path  = '/Users/prasanna/Documents/repos/tdd-practice/src/multipage_searchable.pdf';
const pdf_path2 = '/Users/prasanna/Documents/repos/tdd-practice/src/multipage_searchable2.pdf';

import {assert, should, expect}  from 'chai'; should();

describe.only('Pdf content Controller', () => {

	it('test pdf content', () => {

		// PdfToTextController.pdfToText(pdf_path);
		// PdfToTextController.pdfInfo(p2);

		let expectedContent = [];
		let actualContent   = [];

		return Promise.resolve()
					  .then(() => PdfToTextController.parse(pdf_path))
					  .then(res => expectedContent = res)
					  .then(() => PdfToTextController.parse(pdf_path2))
					  .then(res => actualContent = res)
					  .then(() => (expectedContent.length === actualContent.length).should.be.equal(true));

	});

});