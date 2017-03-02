'use strict';

let ROT13Cipher = {
  inputArr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
             'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  outputArr: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
              'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],

  encode: function(string) {

    let newWord = '';
    let word = string.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === ' '){
        newWord += ' ';
      } else {
        newWord += this.outputArr[this.inputArr.indexOf(word[i])];
      }
    }
    return newWord;
  },

  decode: function(string) {

    let newWord = '';
    let word = string.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === ' '){
        newWord += ' ';
      } else {
        newWord += this.inputArr[this.outputArr.indexOf(word[i])];
      }
    }
    return newWord;
  },

};

module.exports = ROT13Cipher;
