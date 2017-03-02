'use strict';

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
const rotated = "nopqrstuvwxyzabcdefghijklm".split('');

const translate = function (input) {
  let split = input.split('');
  let output = [];

  for (let i = 0; i < split.length; i++) {
    if (split[i] === ' ') {
      output.push(' ');
    } else {
      if (split[i] === split[i].toUpperCase()) {
        let index = alphabet.indexOf(split[i].toLowerCase());
        output.push(rotated[index].toUpperCase());
      } else {
        let index = alphabet.indexOf(split[i]);
        output.push(rotated[index]);
      }
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
