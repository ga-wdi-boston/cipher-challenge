'use strict';

var ROT13Cipher = (function () {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
    var rotatedAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split('');

    var encode = function (string) {
      var codedArray = [];
      var stringArray = string.split('');
      for (var i = 0; i < stringArray.length; i++) {
        var charIndex = alphabet.indexOf(stringArray[i]);
        if (charIndex === -1) {
          codedArray.push(stringArray[i]);
        } else {
        codedArray.push(rotatedAlphabet[charIndex]);
        }
      };
    return codedArray.join('');
    };
    return {
    encode: encode,
    decode: encode
  };
})();

 // 'use strict';

// var ROT13Cipher = (function () {
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     var rotatedAlphabet = 'nopqrstuvwxyzabcdefghijklm'.split('');

//     var code = (function () {
//         var obj = {};

//         _.each(alphabet, function (letter, index, alphabet) {
//             obj[alphabet[index]] = rotatedAlphabet[index];
//         });

//         return obj;
//     })();

//     var encode = function (word) {
//         var encoded = [];

//         _.each(word.split(''), function (letter, index, phrase) {
//             encoded[index] = code[letter];
//         });

//         return encoded.join('');
//     };

//     return {
//       encode: encode,
//       decode: encode
//     };
// })();
