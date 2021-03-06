import * as math from '../src/project-euler';

import * as CodewarsController from '../src/codewars';
import {assert, should, expect}  from 'chai'; should();

import * as faker from 'faker';

describe('Project Euler', () => {

    it('should add the numbers',() => {
    	const num1 = faker.random.number(100),
			  num2 = faker.random.number(100);

    	let sum = math.sum(num1,num2);

    	expect(sum).to.equal(num1+num2);
	});

    it('should return the sum of multiples 3 or 5', ()=> {

    	expect(math.multiple3or5(10)).to.equal(33);
	});

    it('should return a number is multiple of three or not', ()=> {

    	math.isMultipleOfThree(6).should.equal(true);
    	math.isMultipleOfThree(5).should.equal(false);
	});

    it.skip('is the smallest number divisible by 1-20', ()=>{

    	expect(math.divisibleByOneToTwenty(20)).to.be.equal(232792560);
	});

    it('should give the sum of two lowest numbers of array', ()=>{

    	expect(math.sumOfLowestIntegers([5, 8, 12, 19, 22])).to.be.equal(13);
    	expect(math.sumOfLowestIntegers([15, 28, 4, 2, 43])).to.be.equal(6);
    	expect(math.sumOfLowestIntegers([3, 87, 45, 12, 7])).to.be.equal(10);

	});

    it('should return longest',()=>{
    	expect(math.twoToOne('aretheyhere', 'yestheyarehere')).to.be.equal('aehrsty');
    	expect(math.twoToOne('loopingisfunbutdangerous', 'lessdangerousthancoding')).to.be.equal('abcdefghilnoprstu');
	});

    it('should return the vowel count',()=>{
        expect(math.vowelCount('abracadabra')).to.be.equal(5);
    });

    it('should return the consonant count',()=>{

        expect(math.consonantCount('abracadabra')).to.be.equal(6);
    });

    it('should test a string has same number of x  and o' ,()=>{

        math.xoCount('xo').should.equal(true);
        math.xoCount('xxOo').should.equal(true);
        math.xoCount('xxxm').should.equal(false);
        math.xoCount('Oo').should.equal(false);
        math.xoCount('ooom').should.equal(false);
    });

    it('should remove the minimum or smallest value of an array',()=>{

        expect(math.removeSmallest([1, 2, 3, 4, 5])).to.deep.equal([2, 3, 4, 5]);
        expect(math.removeSmallest([5, 3, 2, 1, 4])).to.deep.equal([5, 3, 2, 4]);
        expect(math.removeSmallest([2, 2, 1, 2, 1])).to.deep.equal([2, 2, 2, 1]);
        expect(math.removeSmallest([])).to.deep.equal([]);
    });

    it('should return friend or foe',()=>{

    	expect(math.friendOrFoe(["Ryan", "Kieran", "Mark"])).to.deep.equal(["Ryan", "Mark"]);
    	expect(math.friendOrFoe(["Ryan", "Jimmy", "123", "4", "Cool Man"])).to.deep.equal(["Ryan"]);
    	expect(math.friendOrFoe(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).to.deep.equal(["Jimm", "Cari", "aret"]);
    	expect(math.friendOrFoe(["Love", "Your", "Face", "1"])).to.deep.equal(["Love", "Your", "Face"]);
	});

    it('should return the category of the member',()=>{

		expect(math.openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).to.deep.equal(['Open', 'Senior', 'Open', 'Senior']);
	});

    it('should give me the list of anagrams',()=> {

		expect(math.anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).to.deep.equal(['aabb', 'bbaa']);
	});

    it('should take you to a 10 min walk',() => {

		expect(math.isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).to.be.true;
		expect(!math.isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).to.be.false;
	});

    it('should give you the position of the different number from array of numbers',() =>{

    	expect(math.iqTest([2,4,7,8,10])).to.be.equal(2);
    	expect(math.iqTest([1,2,1,1])).to.be.equal(1);
	});

    it('should give you the position of the different number',() =>{

    	expect(math.iqTest2('2 4 7 8 10')).to.be.equal(3);
    	expect(math.iqTest2('1 2 1 1')).to.be.equal(2);
	});

    it('should return the sorted odd numbers',() => {

    	expect(math.sortArray([5, 3, 2, 8, 1, 4])).to.deep.equal([1, 3, 2, 8, 5, 4]);
    	expect(math.sortArray([5, 3, 1, 8, 0])).to.deep.equal([1, 3, 5, 8, 0]);
    	expect(math.sortArray([])).to.deep.equal([]);
	});

    it('should return camel case text',()=>{

    	expect(math.camelCase('hello world')).to.be.equal('HelloWorld');
    	expect(math.camelCase('camel case method')).to.be.equal('CamelCaseMethod');
	});

    it('should return snake case words camel case word',()=>{

    	expect(math.snakeToCamelCase('hello_world')).to.be.equal('HelloWorld');
    	expect(math.snakeToCamelCase('camel_case_method')).to.be.equal('CamelCaseMethod');
	});

    it('should decode morse code',() => {

    	expect(math.decodeMorse('.... . -.--   .--- ..- -.. .')).to.be.equal('HEY JUDE');
    	expect(math.decodeMorse('···−−−···')).to.be.equal('SOS');
    	expect(math.decodeMorse('.--. .-. .- ... .- -. -. .-')).to.be.equal('PRASANNA');
    	expect(math.decodeMorse('..   .- --   .-- --- .-. -.- .. -. --.   --- -.   .--- ...')).to.be.equal('I AM WORKING ON JS');
	});

    it('should encode string to morse code',() => {

    	expect(math.encodeMorse('PRASANNA')).to.be.equal('.--. .-. .- ... .- -. -. .-');
    	expect(math.encodeMorse('HEY JUDE')).to.be.equal('.... . -.--   .--- ..- -.. .');
    	expect(math.encodeMorse('I AM WORKING ON JS')).to.be.equal('..   .- --   .-- --- .-. -.- .. -. --.   --- -.   .--- ...');
	});

    it('should return the increment of the string',()=>{
    	expect(math.stringIncrementer('prasanna1404')).to.be.equal('prasanna1405');
    	expect(math.stringIncrementer('prasanna')).to.be.equal('prasanna1');
    	expect(math.stringIncrementer('prasanna001')).to.be.equal('prasanna002');
	});

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

    it('should return pair of numbers',()=>{

		expect(math.isCheating(26)).to.deep.equal([[15,21], [21,15]]);
		expect(math.isCheating(100)).to.deep.equal([]);
	});


    it('should return permutations of letters',() => {

    	expect(math.permutations('a')).to.deep.equal(['a']);
    	expect(math.permutations('ba')).to.deep.equal(['ab', 'ba']);
    	expect(math.permutations('aabb')).to.deep.equal(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
	});

});