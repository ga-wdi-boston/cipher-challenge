'use strict';

// var ROT13Cipher = (function () {
//   var alpha = "abcdefghijklmnopqrstucvwxyz"
//   alpha = alpha.split("")
//   return alpha

//   var goThrough = function(word){
//     word = word.split("");
//     wordIndex = word.map(indexOf(word))

//   }
// })();



// var goThrough = function(inputString){
//   var alpha = "abcdefghijklmnopqrstucvwxyz";
//   alpha = alpha.split("");
//   var inputStringArray = inputString.split("");
//   var wordIndex = inputStringArray.map(function(ch){
//  //   console.log(ch);
//     var indexInAlpha = alpha.indexOf(ch);
//     console.log("orig char is " + indexInAlpha);
//     var newIndexAlpha = (indexInAlpha + 13) % alpha.length;
//     console.log("new char is " + alpha[newIndexAlpha]);
//     return  (alpha[newIndexAlpha];
//   });

//     return wordIndex
//   };
//   console.log(goThrough("candy"))

  var ROT13Cipher = (function () {
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var plain = abc.split("");

  var cipherAbc = 'nopqrstuvwxyzabcdefghijklm';
  var cipher = cipherAbc.split("");

  var encode = function(word) {
    return word.split('').map(function(char) {
      return cipher[plain.indexOf(char)]}).join('');
  }

  var decode = function(word) {
    return word.split('').map(function(char) {
      return plain[cipher.indexOf(char)]}).join('');
  }

  return {
    encode: encode,
    decode: decode
  }

})();


console.log(ROT13Cipher.encode("hello"));


