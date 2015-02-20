  var ROT15Cipher = (function () {
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var plain = abc.split("");

  var cipherAbc = 'zabcdefghijklmnopqrstuvwxy';
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


console.log(ROT15Cipher.encode("hello"));
console.log(ROT15Cipher.decode("gdkkn"));
console.log(ROT15Cipher.encode("awesome"));
