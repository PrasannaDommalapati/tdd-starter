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


});