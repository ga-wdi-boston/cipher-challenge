'use strict';

var ROTxCipher = (function (num_rot) {
  var plain = "abcdefghijklmnopqrstuvwxyz"
  var cipher = plain.substring(num_rot, plain.length) + plain.substring(0, num_rot).split('');
  plain = plain.split('');
  //var cipher = "nopqrstuvwxyzabcdefghijklm".split('');

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
var ROTxCipherNum =
console.log(ROTxCipher(13).Encode("jeff jeff jeff").display());
console.log(ROTxCipher.Decode("wrss wrss wrss").display());
