'use strict';

var ROT13Cipher = (function () {

  var plain = "abcdefghijklmnopqrstuvwxyz".split("");
  var cipher = "zabcdefghijklmnopqrstuvwxy".split("");



    var encode = function(string, n) {
      return string.split('').map(function(char) { return plain[(plain.indexOf(char) + n) % 26]}).join('');
    };

    var decode = function(string, n) {
      return string.split('').map(function(char) { return plain[(plain.indexOf(char) - n + 26) % 26]}).join('');
    };

    return {
      encode: encode,
      decode: decode
    }

})();

