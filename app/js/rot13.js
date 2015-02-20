'use strict';

var ROT13Cipher = (function() {
    var encode = function(stringIn) {
        var encodedString = [];

        var findCharFor = function(string) {
            for (var i = 0; i < this.string.length; i++) {
                encodedString.push(this.string.charCodeAt(i));
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
            return encodedString.join("");
        };
      return {
        encode: encode
    };
})();

// var decode

var code = ROT13Cipher.encode("abcdefghijklmnopqrstucvwxyz");
console.log(code);
