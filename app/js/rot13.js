'use strict';

var ROT13Cipher = (function () {
  // the space before the alphabet starts allows it to encode sentences with spaces
  var abc = ' abcdefghijklmnopqrstuvwxyz';
  var plain = abc.split("");

  var cipherAbc = ' nopqrstuvwxyzabcdefghijklm';
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


console.log(ROT13Cipher.encode("not cool"));
console.log(ROT13Cipher.decode("abg pbby"));

// ROT25Cipher-------------------------------------------------

// var ROT25Cipher = (function () {
//   var abc = 'abcdefghijklmnopqrstuvwxyz';
//   var plain = abc.split("");

//   var cipherAbc = 'zabcdefghijklmnopqrstuvwxy';
//   var cipher = cipherAbc.split("");

//   var encode = function(word) {
//     return word.split('').map(function(char) {
//       return cipher[plain.indexOf(char)]}).join('');
//   }

//   var decode = function(word) {
//     return word.split('').map(function(char) {
//       return plain[cipher.indexOf(char)]}).join('');
//   }

//   return {
//     encode: encode,
//     decode: decode
//   }

// })();

// console.log(ROT25Cipher.encode("fuck"));
// console.log(ROT25Cipher.decode("etbj"));
