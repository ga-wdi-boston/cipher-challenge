'use strict';

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
const rotated = "nopqrstuvwxyzabcdefghijklm".split('');

const translate = function (input, oldArr, newArr) {
  let split = input.split('');
  let output = [];

  for (let i = 0; i < split.length; i++) {
    let index = oldArr.indexOf(split[i]);
    output.push(newArr[index]);
  }

  return output.join('');
};

let ROT13Cipher = {
  encode: function (input) {
    return translate(input, alphabet, rotated);
  },
  decode: function (input) {
    return translate(input, rotated, alphabet);
  }
};

module.exports = ROT13Cipher;
