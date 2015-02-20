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

    var _shiftRightU = function(x){
      if (x + key < -6) {
        return x + key;
      } else {
        return (x + key) - 26;
      }
    };

    var _shiftLeft = function(x){
      if (x - key < 0) {
        return x - key + 26;
      } else {
        return x - key;
      }
    };

    var _shiftLeftU = function(x){
      if (x - key < -32) {
        return x - key +  26;
      } else {
        return x - key;
      }
    };

    var _encodeChar = function(x){
      if (x.toLowerCase() === x){
        return _numToLet(_shiftRight(_letToNum(x)));
      } else {
        return _numToLet(_shiftRightU(_letToNum(x)));
      }
    };

    var _decodeChar = function(x){
      if (x.toLowerCase() === x) {
        return _numToLet(_shiftLeft(_letToNum(x)));
      } else {
        return _numToLet(_shiftLeftU(_letToNum(x)));
      }
    };

    var encode = function(msg){
      return msg.split("").map(_encodeChar).join("");
    };
    var decode = function(msg){
      return msg.split("").map(_decodeChar).join("");
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
