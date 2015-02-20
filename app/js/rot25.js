'use strict';

var ROT25Cipher = (function () {
  var plain = "abcdefghijklmnopqrstuvwxyz".split('');
  var cipher = "zabcdefghijklmnopqrstuvwxy".split('');

  var Encode = function(string){
    var display = function(){
      return result();
    };

    var result = function(){
      var new_string = '';
      for(var i = 0; i < string.length; i++){
        if (string.charAt(i) === ' '){
          new_string += ' ';
        }
        else{
          var charToReplace = string.charAt(i);
          var indexInPlain = plain.indexOf(charToReplace);
          var cipherChar = cipher[indexInPlain];
          new_string += cipherChar;
        };
      };
      return new_string;
    };

    return {
      display: display
    };
  };

  var Decode = function(string){
    var display = function(){
      return result();
    };

    var result = function(){
      var new_string = '';
      for(var i = 0; i < string.length; i++){
        if (string.charAt(i) === ' '){
          new_string += ' ';
        }
        else {
          var charToReplace = string.charAt(i);
          var indexInCipher = cipher.indexOf(charToReplace);
          var plainChar = plain[indexInCipher];
          new_string += plainChar;
        };
      };
      return new_string;
    };

    return {
      display: display
    };
  };

  return {
    Encode: Encode,
    Decode: Decode
  };

})();

//accesses the method and then passes a string to the method
console.log(ROT25Cipher.Encode("hello").display());
console.log(ROT25Cipher.Decode("gdkkn").display());
