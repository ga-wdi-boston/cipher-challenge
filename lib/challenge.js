'use strict';

const inputArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const indexCalc = function(index, shift) {
  let l = inputArr.length;
  if (index + shift >= l) {
    return index + shift - l;
  } else if (index + shift <= 0) {
    return index + shift + l;
  } else {
    return index + shift;
  }
};


let ROTCipher = {

  encode: function(string, shift) {

    let newWord = '';
    let word = string.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === ' '){
        newWord += ' ';
      } else {
        newWord += inputArr[indexCalc(inputArr.indexOf(char), shift)];
      }
    }
    return newWord;
  },

  decode: function(string, shift) {

    return this.encode(string, 0 - shift);
  },

};

module.exports = ROTCipher;
