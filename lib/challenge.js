'use strict';

var nop = ('nopqrstuvwxyzabcdefghijklm').split('');
var abc = ('abcdefghijklmnopqrstuvwxyz').split('');

var prepareInput = function(word) {
  return word.toLowerCase().split('');
};

var convertLetters = function(letters, oldAlpha, newAlpha) {
  return letters.map(function(currentValue, index, array) {
    return newAlpha[(oldAlpha.indexOf(currentValue))];
  });
};

var concatLetters = function(letters) {
  return letters.join('');
};

var encode = function(word) {
  console.log(concatLetters(convertLetters(prepareInput(word), abc, nop)));
};

var decode = function(word) {
  console.log(concatLetters(convertLetters(prepareInput(word), nop, abc)));
};

// let ROT13Cipher = {
//
//   };

module.exports.encode = encode;
module.exports.decode = decode;
