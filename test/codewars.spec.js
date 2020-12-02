import * as CodewarsController from '../src/codewars';

import {assert, should, expect}  from 'chai'; should();

describe('Codewars Controller', () => {

	it('should return the word with replacement of char 13',()=>{

		expect(CodewarsController.rot13('Test')).to.be.equal('Grfg');
		expect(CodewarsController.rot13('rest')).to.be.equal('erfg');
		expect(CodewarsController.rot13('beep')).to.be.equal('orrc');
		expect(CodewarsController.rot13('hello')).to.be.equal('uryyb');
	});

	it('should return an array with common words',() => {

		expect(CodewarsController.inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"])).to.deep.equal(["live", "strong"]);
		expect(CodewarsController.inArray(["live", "strong", "arp"],["lively", "alive", "harp", "sharp", "armstrong"])).to.deep.equal(["arp", "live", "strong"]);
		expect(CodewarsController.inArray([],["lively", "alive", "harp", "sharp", "armstrong"])).to.deep.equal([]);
	});

	it('should count the triplets',() => {
		expect(CodewarsController.greedIsGood([2, 3, 4, 6, 2])).to.be.equal(0);
		expect(CodewarsController.greedIsGood([4, 4, 4, 3, 3])).to.be.equal(400);
		expect(CodewarsController.greedIsGood([2, 4, 4, 5, 4])).to.be.equal(450);
		expect(CodewarsController.greedIsGood([4, 4, 4, 3, 3])).to.be.equal(400);
		expect(CodewarsController.greedIsGood([1,1,1,1,3])).to.be.equal(300);
	});

});