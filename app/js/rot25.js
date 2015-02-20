var ROT25Cipher = (function () {
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

console.log(ROT25Cipher.encode("baggy"));
console.log(ROT25Cipher.decode("azffx"));
