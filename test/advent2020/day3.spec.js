import * as day3Controller from '../../src/advent2020/day3';
import { expect } from 'chai';


describe('Day3 Test Suite', () => {

    it('should return tree cout of 173 in the trajectory', () => {
        //act
        let result = day3Controller.Trajectory(3, 1);

        //assert
        expect(173).to.equal(result);
    });

    it('should return 0 when down is non positive number', () => {
        //act
        let result = day3Controller.Trajectory(3, 0);

        //assert
        expect(0).to.equal(result);
    });

    it('should return 0 when right is non positive number', () => {
        //act
        let result = day3Controller.Trajectory(0, 1);

        //assert
        expect(0).to.equal(result);
    });
});

