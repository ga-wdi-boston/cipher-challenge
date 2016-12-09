'use strict';



let ROT13Cipher = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  rotated: 'nopqrstuvwxyzabcdefghijklm',

  encode: function(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < this.alphabet.length; j++) {
        if (word[i] === this.alphabet[j]) {
          result += this.rotated[j];
          break;
        }
      }
    }
    return result;
  }
};

module.exports = ROT13Cipher;
