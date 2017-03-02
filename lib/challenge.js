'use strict';

let ROT13Cipher = {
  'a': 'n',
  'b': 'o',
  'c': 'p',
  'd': 'q',
  'e': 'r',
  'f': 's',
  'g': 't',
  'h': 'u',
  'i': 'v',
  'j': 'w',
  'k': 'x',
  'l': 'y',
  'm': 'z',
  'n': 'a',
  'o': 'b',
  'p': 'c',
  'q': 'd',
  'r': 'e',
  's': 'f',
  't': 'g',
  'u': 'h',
  'v': 'i',
  'w': 'j',
  'x': 'k',
  'y': 'l',
  'z': 'm',
};

let ROT13CipherDecode = {
  'n': 'a',
  'o': 'b',
  'p': 'c',
  'q': 'd',
  'r': 'e',
  's': 'f',
  't': 'g',
  'u': 'h',
  'v': 'i',
  'w': 'j',
  'x': 'k',
  'y': 'l',
  'z': 'm',
  'a': 'n',
  'b': 'o',
  'c': 'p',
  'd': 'q',
  'e': 'r',
  'f': 's',
  'g': 't',
  'h': 'u',
  'i': 'v',
  'j': 'w',
  'k': 'x',
  'l': 'y',
  'm': 'z',
};

const encode = function (string) {
  let letterArray = string.split('');
  let newArray = [];
  letterArray.forEach(function (letter) {
      let newLetter = ROT13Cipher[letter];
      newArray.push(newLetter);
      return newArray;
  });
    let newWord = newArray.join('');
    console.log(newWord);
};

const decode = function (string) {
  let letterArray = string.split('');
  let newArray = [];
  letterArray.forEach(function (letter) {
      let newLetter = ROT13CipherDecode[letter];
      newArray.push(newLetter);
      return newArray;
  });
    let newWord = newArray.join('');
    console.log(newWord);
};

module.exports = (
  ROT13Cipher,
  encode,
  decode
);
