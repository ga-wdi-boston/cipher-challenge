'use strict';

var ROT13Cipher = (function () {
  // your code here
  var Code = function(key){

    var _charToCode = function(letter)
    {
      var asciiId = letter.charCodeAt(0) + key;
      if(asciiId <= 122){
        return String.fromCharCode(asciiId);
      }else{
        return String.fromCharCode(asciiId - 26);
      };
    };

    var _codeToChar = function(letter)
    {
      var asciiId = letter.charCodeAt(0) - key;
      if(asciiId >= 97){
        return String.fromCharCode(asciiId);
      }else{
        return String.fromCharCode(asciiId + 26);
      };
    };

    var encode = function(str){
      var arr = str.split("");

      var out = arr.map(_charToCode);
      return out.join("");
    };

    var decode = function(str){
      var arr = str.split("");

      var out = arr.map(_codeToChar);
      return out.join("");
    };

    return {
    key: key,
    encode: encode,
    decode:decode
    };
  };

  return{
    Code: Code
  };

})();

