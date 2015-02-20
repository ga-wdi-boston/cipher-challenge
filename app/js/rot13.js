'use strict';

var ROT13Cipher = (function () {

  var plain = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var cipher = ["b", "u", "g", "i", "j", "s", "d", "a", "w", "v", "p", "r", "u", "k", "q", "h", "z", "l", "x", "y", "c", "f", "v", "n", "e", "c"];



    var encode = function(string) {
      return string.split('').map(function(char) { return cipher[plain.indexOf(char)]}).join('');
    };

    var decode = function(string) {
      return string.split('').map(function(char) { return plain[cipher.indexOf(char)]}).join('');
    };

    return {
      encode: encode,
      decode: decode
    }

})();

var cipher = ROT13Cipher;
cipher.encode('hello');
cipher.encode('jeff');

