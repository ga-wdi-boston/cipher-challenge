'use strict';

let nop = ('nopqrstuvwxyzabcdefghijklm ').split('');
let abc = ('abcdefghijklmnopqrstuvwxyz ').split('');

var prepareInput = function(word) {
  return word.split('');
};

// needs refactoring for clarity
var convertLetters = function(letters, oldAlpha, newAlpha) {
  return letters.map(function(currentValue, index, array) {
    if (currentValue.toLowerCase() === currentValue) {
      return newAlpha[(oldAlpha.indexOf(currentValue))];
    } else {
      return (newAlpha[(oldAlpha.indexOf(currentValue.toLowerCase()))]).toUpperCase();
    }
  });
};

let concatLetters = function(letters) {
  return letters.join('');
};

let encode = function(word) {
  console.log(concatLetters(convertLetters(prepareInput(word), abc, nop)));
};

let decode = function(word) {
  console.log(concatLetters(convertLetters(prepareInput(word), nop, abc)));
};

// let ROT13Cipher = {
//
//   };

module.exports.encode = encode;
module.exports.decode = decode;
