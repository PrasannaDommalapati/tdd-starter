import * as math from '../src/project-euler'

import {expect} from 'chai';

import * as faker from 'faker';

describe('Project Euler', () => {

    it('should add the numbers',() => {
    	const num1 = faker.random.number(100),
			  num2 = faker.random.number(100);

    	let sum = math.sum(num1,num2);

    	expect(sum).to.equal(num1+num2);
	});

    it('it should return the sum of multiples 3 or 5', ()=> {

    	expect(math.multiple3or5(10)).to.equal(33);
	});

    it('is multiple of three?', ()=> {

    	expect(math.isMultipleOfThree(6)).to.be.true;
    	expect(math.isMultipleOfThree(5)).to.be.false;
	});

    it('is the smallest number divisible by 1-20', ()=>{

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

        expect(math.xoCount('xo')).to.be.true;
        expect(math.xoCount('xxOo')).to.be.true;
        expect(math.xoCount('xxxm')).to.be.false;
        expect(math.xoCount('Oo')).to.be.false;
        expect(math.xoCount('ooom')).to.be.false;
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

	});

    it('should encode to morse code',() => {

    	//expect(math.encodeMorse('HEY JUDE')).to.be.equal('.... . -.--   .--- ..- -.. .');

	});

});