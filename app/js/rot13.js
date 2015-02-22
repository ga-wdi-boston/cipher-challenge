'use strict';

// for each character in the string passed, replace with the letter at the index of that character in the cipher alphabet

// Too expensive to loop over the alphabet each time, but I will need to iterate over the text, using .map

var ROT13Cipher = (function () {

  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var alphabet = alphabet.split("");
  var cipher = 'nopqrstuvwxyzabcdefghijklm';
  var cipher = cipher.split("");

  var encode = function(text) {
    return text.toLowerCase().split('').map(function(letter) {
      return cipher[alphabet.indexOf(letter)]}).join('');
  }

  var decode = function(text) {
    return text.split('').map(function(letter) {
      return alphabet[cipher.indexOf(letter)]}).join('');
  }

  return {
    encode: encode,
    decode: decode
  }

})();

























