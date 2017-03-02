'use strict';

const inputArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
           'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const outputArr = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];


let ROT13Cipher = {

  encode: function(string) {

    let newWord = '';
    let word = string.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === ' '){
        newWord += ' ';
      } else {
        newWord += outputArr[inputArr.indexOf(word[i])];
      }
    }
    return newWord;
  },

  decode: function(string) {

    return this.encode(string);
  },

};

module.exports = ROT13Cipher;
