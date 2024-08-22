#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('returns 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('returns 5 when inputs are 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('returns 6 when inputs are 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('returns -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('returns -3 when inputs are 1.2 and 4.2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 4.2), -3);
    });

    it('returns -2 when inputs are 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('DIVIDE', () => {
    it('returns 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('returns 0.25 when inputs are 1 and 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('returns "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
