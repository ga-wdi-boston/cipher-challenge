'use strict';

let nop = ('nopqrstuvwxyzabcdefghijklm ').split('');
let abc = ('abcdefghijklmnopqrstuvwxyz ').split('');

let prepareInput = function(word) {
  return word.toLowerCase().split('');
};

let convertLetters = function(letters, oldAlpha, newAlpha) {
  return letters.map(function(currentValue, index, array) {
    return newAlpha[(oldAlpha.indexOf(currentValue))];
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
