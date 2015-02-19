'use strict';

var ROTCipher = (function () {
  var Code = function(key){

    var _letToNum = function(x){
      return x.charCodeAt(0)-97;
    };

    var _numToLet = function(x){
      return String.fromCharCode(97+x);
    };

    var _shiftRight = function(x){
      if (x === -65) {
        return -65;
      } else {
        return (x + key) % 26;
      }
    };

    var _shiftLeft = function(x){
      var a = (x - key);
      if (x === -65) {
        return -65;
      } else if (a < 0) {
        return a + 26;
      } else {
        return a % 26;
      }
    };

    var encode = function(msg){
      return msg.split("").map(_letToNum).map(_shiftRight).map(_numToLet).join("");
    };
    var decode = function(msg){
      return msg.split("").map(_letToNum).map(_shiftLeft).map(_numToLet).join("");
    };

    return {
      encode: encode,
      decode: decode
    };
  };
  return {
    Code: Code
  };
})();

var cipher = ROTCipher.Code(13);
console.log(cipher.encode('hello dolly'));
console.log(cipher.decode('uryyb'))
