'use strict';

var ROT13Cipher = (function() {
  var encode = function(stringIn) {
    var encodedString = [];

    var findCharFor = function(string) {
      for (var i = 0; i < string.length; i++) {
        encodedString.push(string.charCodeAt(i));
      }
    };

    var changeCharValues = function() {
      for (var i = 0; i < encodedString.length; i++) {
        if ((encodedString[i] + 13) > 122) {
          encodedString[i] = (encodedString[i] + 13) - 26;
        } else {
          encodedString[i] = encodedString[i] + 13;
        }
      }
    };

    var encodeString = function() {
      for (var i = 0; i < encodedString.length; i++) {
        encodedString[i] = String.fromCharCode(encodedString[i]);
      }
    };
    findCharFor(stringIn);
    changeCharValues();
    encodeString();
    return encodedString.join("");
  };

  var decode = function(stringIn){
    var reverseCharValues = function(string) {
      for (var i = 0; i < encodedString.length; i++) {
        if ((encodedString[i] - 13) > 122) {
          encodedString[i] = (encodedString[i] - 13) - 26;
        } else {
          encodedString[i] = encodedString[i] - 13;
        }
      }
    };
    reverseCharValues(stringIn);
  };

  return {
    encode: encode
  };
})();


var code = ROT13Cipher;
console.log(code.encode('hello'));
console.log(code.decode('uryyb'))
