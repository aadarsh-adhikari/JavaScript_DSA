const { isPalindrome, isPalindromeAlt } = require('../beginner/strings/01-palindrome');
const { reverseString, reverseStringAlt } = require('../beginner/strings/02-reverse-string');
const { countVowels, countVowelsRegex } = require('../beginner/strings/03-count-vowels');
const { firstNonRepeating } = require('../beginner/strings/04-first-non-repeating');

describe('String Problems - Beginner', () => {
  describe('Palindrome', () => {
    test('should identify palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('hello')).toBe(false);
    });
    
    test('alternative method should work', () => {
      expect(isPalindromeAlt('racecar')).toBe(true);
      expect(isPalindromeAlt('hello')).toBe(false);
    });
  });
  
  describe('Reverse String', () => {
    test('should reverse string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('a')).toBe('a');
      expect(reverseString('')).toBe('');
    });
    
    test('alternative method should work', () => {
      expect(reverseStringAlt('hello')).toBe('olleh');
    });
  });
  
  describe('Count Vowels', () => {
    test('should count vowels', () => {
      expect(countVowels('hello world')).toBe(3);
      expect(countVowels('AEIOU')).toBe(5);
      expect(countVowels('xyz')).toBe(0);
    });
    
    test('regex method should work', () => {
      expect(countVowelsRegex('hello world')).toBe(3);
    });
  });
  
  describe('First Non-Repeating Character', () => {
    test('should find first non-repeating character', () => {
      expect(firstNonRepeating('javascript')).toBe('j');
      expect(firstNonRepeating('aabbcc')).toBe(null);
      expect(firstNonRepeating('hello')).toBe('h');
    });
  });
});
