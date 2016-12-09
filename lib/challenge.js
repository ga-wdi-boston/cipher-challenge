'use strict';



let ROT13Cipher = {
  alphaDown: 'abcdefghijklmnopqrstuvwxyz',
  alphaUp: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

  _buildRot: function(n) {
    let rotated = '';
    for (let i = n; i < 26; i++) {
      rotated += this.alphaDown[i];
    }
    for (let i = 0; i < n; i++) {
      rotated += this.alphaDown[i];
    }
    rotated += rotated.toUpperCase();
    return rotated;
  },

  encode: function(word, n) {
    let alphabet = this.alphaDown + this.alphaUp;
    let rotated = this._buildRot(n);

    let result = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] === ' ') {
          result += ' ';
      } else {
        for (let j = 0; j < alphabet.length; j++) {
          if (word[i] === alphabet[j]) {
            result += rotated[j];
            break;
          }
        }
      }
    }
    return result;
  },

  decode: function(word, n) {
    let alphabet = this.alphaDown + this.alphaUp;
    let rotated = this._buildRot(n);

    let result = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] === ' ') {
          result += ' ';
      } else {
        for (let j = 0; j < rotated.length; j++) {
          if (word[i] === rotated[j]) {
            result += alphabet[j];
            break;
          }
        }
      }
    }
    return result;
  }
};

module.exports = ROT13Cipher;
