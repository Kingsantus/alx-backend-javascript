#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('returns 4 when inputs are 1 and 3', () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});
	
	it('returns 5 when inputs are 1 and 3.7', () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});
	
	it('returns 5 when inputs are 1.2 and 3.7', () => {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});
	
	it('returns 6 when inputs are 1.5 and 3.7', () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
	
	it('returns 6 when inputs are 4 and 1.7', () => {
		assert.strictEqual(calculateNumber(4, 1.7), 6);
	});
	
	it('returns 11 when inputs are 10 and 1.2', () => {
		assert.strictEqual(calculateNumber(10, 1.2), 11);
	});
	
	it('returns 5 when inputs are 1.5 and 3.4', () => {
		assert.strictEqual(calculateNumber(1.5, 3.4), 5);
	});
	
	it('returns 8 when inputs are 4.5 and 2.7', () => {
		assert.strictEqual(calculateNumber(4.5, 2.7), 8);
	});
	
	it('returns 7 when inputs are 3 and 3.7', () => {
		assert.strictEqual(calculateNumber(3, 3.7), 7);
	});
});
