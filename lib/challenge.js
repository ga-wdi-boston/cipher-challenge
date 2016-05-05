'use strict';

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



let ROT13Cipher = {
  encode: function(str){
    let result = [];
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if (arr[i] === alphabet[j]) {
          console.log('match', arr[i], alphabet[j]);
          let letterIndex = alphabet.indexOf(arr[i]);
          console.log('letter index', letterIndex);
          if (letterIndex >= 13){
            result[i] = alphabet[letterIndex - 13];
          } else {
          result[i] = alphabet[letterIndex + 13];
        }
        }
      }

    }
    console.log(result);
    return result;

  }
};

module.exports = ROT13Cipher;
