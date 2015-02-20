// 'use strict';

// var ROT13Cipher = (function() {

//     var encode = function(string) {
//         var array = string.split(''),
//             letters = [],
//             shift, value;
//         for(var i = 0; i < string.length; i++) {
//             value = array[i].charCodeAt();
//             if (value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt()) {
//                 if (value + 13 > 'Z'.charCodeAt()) {
//                     shift = value + 12 - ('Z'.charCodeAt() - 'A'.charCodeAt());
//                 } else {
//                     shift = value + 13;
//                 }
//             } else if (value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt()) {
//                 if (value + 13 > 'z'.charCodeAt()) {
//                     shift = value + 12 - ('z'.charCodeAt() - 'a'.charCodeAt());
//                 } else {
//                     shift = value + 13;
//                 }
//             } else {
//                 shift = value;
//             }
//             letters.push(String.fromCharCode(shift));
//         }
//         return letters.join('');
//     };

//     return {
//         encode: encode,
//         decode: encode
//     };

// })();

'use strict';

var ROT13Cipher = (function() {
    var upperAcode = 'A'.charCodeAt(),
    upperZcode = 'Z'.charCodeAt(),
    lowerAcode = 'a'.charCodeAt(),
    lowerZcode = 'z'.charCodeAt(),
    cipher = 13;

    var encode = function(msg) {
        var uncodedArray = msg.split(''),
        codedArray = [],
        charCode,
        i;

        for (i = 0; i < msg.length; i++) {
            charCode = uncodedArray[i].charCodeAt();
            charCode = _encodeLetter(charCode);
            codedArray.push(String.fromCharCode(charCode));
        }
        return codedArray.join('');
    };

    var decode = function(msg){
        var codedArray = msg.split(''),
        uncodedArray = [],
        charCode,
        i;

        for (i = 0; i < msg.length; i++) {
            charCode = codedArray[i].charCodeAt();
            charCode = _decodeLetter(charCode);
            uncodedArray.push(String.fromCharCode(charCode));
        }
        return uncodedArray.join('');
    };

    var _encodeLetter = function(charCode) {
        if ( _isUpperLetter(charCode) ) {
            return _encodeUpperLetter(charCode);
        } else if ( _isLowerLetter(charCode) ) {
            return _encodeLowerLetter(charCode);
        } else {
            return charCode;
        }
    };

    var _encodeUpperLetter = function(charCode) {
        if ( _overflowsUpper(charCode) ) {
            return charCode + (cipher - 1) - (upperZcode - upperAcode);
        } else {
            return charCode + cipher;
        }
    };

    var _encodeLowerLetter = function(charCode) {
        if ( _overflowsLower(charCode) ) {
            return charCode + (cipher - 1) - (lowerZcode - lowerAcode);
        } else {
            return charCode + cipher;
        }
    };

    var _decodeLetter = function(charCode) {
        if ( _isUpperLetter(charCode) ) {
            return _decodeUpperLetter(charCode);
        } else if ( _isLowerLetter(charCode) ) {
            return _decodeLowerLetter(charCode);
        } else {
            return charCode;
        }
    };

    var _decodeUpperLetter = function(charCode) {
        if ( _underflowsUpper(charCode) ) {
            return charCode - (cipher - 1) + (upperZcode - upperAcode);
        } else {
            return charCode - cipher;
        }
    };

    var _decodeLowerLetter = function(charCode) {
        if ( _underflowsLower(charCode) ) {
            return charCode - (cipher - 1) + (lowerZcode - lowerAcode);
        } else {
            return charCode - cipher;
        }
    };

    var _isUpperLetter = function(charCode) {
        return upperAcode <= charCode && charCode <= upperZcode;
    };

    var _overflowsUpper = function(charCode) {
        return charCode + cipher > upperZcode;
    };

    var _underflowsUpper = function(charCode) {
        return charCode - cipher < upperAcode;
    };

    var _isLowerLetter = function(charCode) {
        return lowerAcode <= charCode && charCode <= lowerZcode;
    };

    var _overflowsLower = function(charCode) {
        return charCode + cipher > lowerZcode;
    };

    var _underflowsLower = function(charCode) {
        return charCode - cipher < lowerAcode;
    };

    return {
      encode: encode,
      decode: decode
    };

})();
