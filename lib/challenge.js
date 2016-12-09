'use strict';



let ROT13Cipher = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const rotated = 'nopqrstuvwxyzabcdefghijklm';

  let result = '';
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (word[i] === alphabet[j]) {
        result += rotated[j];
        break;
      }
    }
  }
  return result;
};

module.exports = ROT13Cipher;
