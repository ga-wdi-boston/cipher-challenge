'use strict';

let ROT13Cipher = {
"secret":"bcdefghijklmnopqrstuvwxyza",
"alphabet": "abcdefghijklmnopqrstuvwxyz",
encode: function(word){
  let alp = this.alphabet.split('');
  let keyWord = this.secret.split('');
  let inPut = word.split('');
  let arrayOfNumbers = [];
  for (var i = 0; i < inPut.length; i++) {

    alp.forEach(function(word) {
      if(word === inPut[i]){
        arrayOfNumbers.push(alp.indexOf(word))
      }
    })
  }
let result = [];
arrayOfNumbers.forEach(function(number){
  result.push(keyWord[number])
})
console.log(result.join(""));

}
};


module.exports = ROT13Cipher;
