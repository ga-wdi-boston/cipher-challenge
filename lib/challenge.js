'use strict';

let abc = ('abcdefghijklmnopqrstuvwxyz ').split('');


let prepareInput = function(word) {
  return word.split('');
};

let convertLetters = function(letters, oldAlpha, newAlpha) {
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

let customCipher = function (offset) {
  let newAlpha = [];
  let secondHalf = [];
  for (let i=0; i<(abc.length - 1); i++) {
    if (i >= offset) {
    newAlpha.push(abc[i]);
    } else {
      secondHalf.push(abc[i]);
    }
  }
  newAlpha = ([newAlpha, secondHalf, ' ']).reduce(function(a, b) {
  return a.concat(b);});
  return newAlpha;
};

let encode = function(word, offset) {
  console.log(concatLetters(convertLetters(prepareInput(word), abc, customCipher(offset))));
};

let decode = function(word, offset) {
  console.log(concatLetters(convertLetters(prepareInput(word), customCipher(offset), abc)));
};

// let ROT13Cipher = {
//
//   };

module.exports.encode = encode;
module.exports.decode = decode;
