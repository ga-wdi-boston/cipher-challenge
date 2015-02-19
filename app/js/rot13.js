'use strict';

var ROT13Cipher = (function () {
  // your code here
  var Code = function(key){

    var _charToCode = function(letter)
    {
      var asciiId = letter.charCodeAt(0) + key;
      if(asciiId === 32 + key){
        return String.fromCharCode(32);
      }else if((90+key <= asciiId && asciiId <= 122) || (65 <= asciiId && asciiId <= 90)) {
        return String.fromCharCode(asciiId);
      }else {
        return String.fromCharCode(asciiId - 26);
      };
    };

    var _codeToChar = function(letter)
    {
      var asciiId = letter.charCodeAt(0) - key;
      if(asciiId === 32 - key){
        return String.fromCharCode(32);
      }else if((97 <= asciiId && asciiId <= 122) || (65 <= asciiId && asciiId <= 90-key)){
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
    encode: encode,
    decode:decode
    };
  };

  return{
    Code: Code
  };

})();

