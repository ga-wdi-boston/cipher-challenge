'use strict';

var ROT13Cipher = (function () {
  var plain = "abcdefghijklmnopqrstuvwxyz".split('');
  var cipher = "nopqrstuvwxyzabcdefghijklm".split('');
  var cipher25 = "zabcdefghijklmnopqrstuvwxy".split('');

  var Encode = function(string){
    var display = function(){
      return result();
    }

    var result = function(){
      var new_string = '';
      for(var i = 0; i < string.length; i++){
        var charToReplace = string.charAt(i);
        var indexInPlain = plain.indexOf(charToReplace);
        var cipherChar = cipher[indexInPlain];
        new_string += cipherChar;
      }
      return new_string;
    }

    return {
      display: display
    }
  }

  var Encode25 = function(string){
    var display = function(){
      return result();
    }

    var result = function(){
      var new_string = '';
      for(var i = 0; i < string.length; i++){
        var charToReplace = string.charAt(i);
        if (charToReplace === ' '){
            new_string += ' ';
        } else {
            var indexInPlain = plain.indexOf(charToReplace);
            var cipherChar = cipher[indexInPlain];
            new_string += cipherChar;
        }
    }
      return new_string;
    }

    return {
      display: display
    }
  }

  return {
    Encode: Encode,
    Decode: Encode,
    Encode25: Encode25,
    Decode25: Encode25
  }

})();

//accesses the method and then passes a string to the method
console.log(ROT13Cipher.Encode("hello").display());
console.log(ROT13Cipher.Decode("uryyb").display());
console.log(ROT13Cipher.Encode("pat").display());
console.log(ROT13Cipher.Decode("cng").display());
console.log(ROT13Cipher.Encode("hello pat").display());
console.log(ROT13Cipher.Decode("uryyb cng").display());
