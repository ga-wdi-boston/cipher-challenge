'use strict';

var ROT13Cipher = (function() {
    var encode = function(stringIn) {
        var encodedString = [];

        var findCharFor = function(string) {
            for (var i = 0; i < string.length; i++) {
                encodedString.push(string.charCodeAt(i));
            }
        };

        // var setCharPos = function() {
        //     for (var i = 0; i < encodedString.length; i++) {
        //         encodedString[i] = encodedString[i] - 97;
        //     }
        // };

        var changeCharValues = function() {
            for (var i = 0; i < encodedString.length; i++) {
                if ((encodedString[i] + 13) > 122) {
                  encodedString[i] = (encodedString[i] + 13) - 26;
            } else {
                encodedString[i] = encodedString[i] + 13;
            }
        }

        var encodeString = function() {
            for (var i = 0; i < encodedString.length; i++) {
                // encodedString[i] = encodedString[i] + 96;
                encodedString[i] = String.fromCharCode(i);
                // encodedString.join("");
            }
        }

    return {
        encode: encode
    }
}

// var decode

})();

ROT13Cipher.encode("abcdefghijklmnopqrstucvwxyz");
