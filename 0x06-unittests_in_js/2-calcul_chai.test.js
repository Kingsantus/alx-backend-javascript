#!/usr/bin/node
// test using chia


const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('should return 6 when inputs are 1.4 and 4.5', () => {
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});
		
		it('should return 5 when inputs are 1.2 and 3.7', () => {
			expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
		});
		
		it('should return 6 when inputs are 1.5 and 3.7', () => {
			expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
		});
	});
	
	describe('SUBTRACT', () => {
		it('should return -4 when inputs are 1.4 and 4.5', () => {
			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		});
		
		it('should return -3 when inputs are 1.2 and 4.2', () => {
			expect(calculateNumber('SUBTRACT', 1.2, 4.2)).to.equal(-3);
		});
		
		it('should return -2 when inputs are 1.5 and 3.7', () => {
			expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
		});
	});
	
	describe('DIVIDE', () => {
		it('should return 0.2 when inputs are 1.4 and 4.5', () => {
			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
		});
		
		it('should return 0.25 when inputs are 1 and 4', () => {
			expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
		});
		
		it('should return "Error" when dividing by 0', () => {
			expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
		});
	});
});
