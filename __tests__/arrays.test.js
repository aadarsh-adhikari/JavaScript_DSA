const { findMax, findMaxAlt } = require('../beginner/arrays/01-find-max');
const { reverseArray, reverseArrayInPlace } = require('../beginner/arrays/02-reverse-array');
const { arraySum, arraySumReduce } = require('../beginner/arrays/03-array-sum');
const { removeDuplicates, removeDuplicatesSet } = require('../beginner/arrays/04-remove-duplicates');

describe('Array Problems - Beginner', () => {
  describe('Find Max', () => {
    test('should find maximum in array', () => {
      expect(findMax([1, 5, 3, 9, 2])).toBe(9);
      expect(findMax([10])).toBe(10);
      expect(findMax([-5, -1, -10])).toBe(-1);
    });
    
    test('should return null for empty array', () => {
      expect(findMax([])).toBe(null);
    });
    
    test('alternative method should work', () => {
      expect(findMaxAlt([1, 5, 3, 9, 2])).toBe(9);
    });
  });
  
  describe('Reverse Array', () => {
    test('should reverse array', () => {
      expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
      expect(reverseArray([1])).toEqual([1]);
      expect(reverseArray([])).toEqual([]);
    });
    
    test('should reverse array in place', () => {
      const arr = [1, 2, 3, 4, 5];
      reverseArrayInPlace(arr);
      expect(arr).toEqual([5, 4, 3, 2, 1]);
    });
  });
  
  describe('Array Sum', () => {
    test('should calculate sum', () => {
      expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
      expect(arraySum([10])).toBe(10);
      expect(arraySum([])).toBe(0);
    });
    
    test('should work with reduce', () => {
      expect(arraySumReduce([1, 2, 3, 4, 5])).toBe(15);
    });
  });
  
  describe('Remove Duplicates', () => {
    test('should remove duplicates', () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(removeDuplicates([1, 1, 1])).toEqual([1]);
      expect(removeDuplicates([])).toEqual([]);
    });
    
    test('should work with Set', () => {
      expect(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
