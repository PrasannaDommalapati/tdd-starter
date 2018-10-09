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

    it('should test a string has same number of x  and O' ,()=>{

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

});