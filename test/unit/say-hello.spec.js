import sayHello from '../../src/say-hello'

import {expect} from 'chai';

import * as faker from 'faker';

describe('Say Hello', () => {

    it('should say hello when given a name', () => {

        const randomName = faker.name.firstName();

        sayHello(randomName)
               .then(greeting =>
                   expect(greeting).to.equal(`Hello, ${randomName}!`));
    });
});