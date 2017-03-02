'use strict';

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
const rotated = "nopqrstuvwxyzabcdefghijklm".split('');

const replaceLetter = function(letter) {
  if (letter === letter.toUpperCase()) {
    let index = alphabet.indexOf(letter.toLowerCase());
    return rotated[index].toUpperCase();
  } else {
    let index = alphabet.indexOf(letter);
     return rotated[index];
  }
};

const translate = function (input) {
  let split = input.split('');
  let output = [];

  for (let i = 0; i < split.length; i++) {
    if (split[i] === ' ') {
      output.push(' ');
    } else {
      output.push(replaceLetter(split[i]));
    }
  }

  return output.join('');
};

let ROT13Cipher = {
  encode: function (input) {
    return translate(input);
  },
  decode: function (input) {
    return translate(input);
  }
};

module.exports = ROT13Cipher;
