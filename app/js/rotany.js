'use strict';

var ROTANYCipher = (function() {
    var upperAcode = 'A'.charCodeAt(),
    upperZcode = 'Z'.charCodeAt(),
    lowerAcode = 'a'.charCodeAt(),
    lowerZcode = 'z'.charCodeAt(),
    charCode,
    i;

    var encode = function(msg, cipher) {
        var uncodedArray = msg.split(''),
        codedArray = [];

        for (i = 0; i < msg.length; i++) {
            charCode = uncodedArray[i].charCodeAt();
            charCode = _encodeLetter(charCode, cipher);
            codedArray.push(String.fromCharCode(charCode));
        }
        return codedArray.join('');
    };

    var decode = function(msg, cipher){
        var codedArray = msg.split(''),
        uncodedArray = [];

        for (i = 0; i < msg.length; i++) {
            charCode = codedArray[i].charCodeAt();
            charCode = _decodeLetter(charCode, cipher);
            uncodedArray.push(String.fromCharCode(charCode));
        }
        return uncodedArray.join('');
    };

    var _encodeLetter = function(charCode, cipher) {
        if ( _isUpperLetter(charCode) ) {
            return _encodeUpperLetter(charCode, cipher);
        } else if ( _isLowerLetter(charCode) ) {
            return _encodeLowerLetter(charCode, cipher);
        } else {
            return charCode;
        }
    };

    var _encodeUpperLetter = function(charCode, cipher) {
        if ( _overflowsUpper(charCode, cipher) ) {
            return charCode + (cipher - 1) - (upperZcode - upperAcode);
        } else {
            return charCode + cipher;
        }
    };

    var _encodeLowerLetter = function(charCode, cipher) {
        if ( _overflowsLower(charCode, cipher) ) {
            return charCode + (cipher - 1) - (lowerZcode - lowerAcode);
        } else {
            return charCode + cipher;
        }
    };

    var _decodeLetter = function(charCode, cipher) {
        if ( _isUpperLetter(charCode) ) {
            return _decodeUpperLetter(charCode, cipher);
        } else if ( _isLowerLetter(charCode) ) {
            return _decodeLowerLetter(charCode, cipher);
        } else {
            return charCode;
        }
    };

    var _decodeUpperLetter = function(charCode, cipher) {
        if ( _underflowsUpper(charCode, cipher) ) {
            return charCode - (cipher - 1) + (upperZcode - upperAcode);
        } else {
            return charCode - cipher;
        }
    };

    var _decodeLowerLetter = function(charCode, cipher) {
        if ( _underflowsLower(charCode, cipher) ) {
            return charCode - (cipher - 1) + (lowerZcode - lowerAcode);
        } else {
            return charCode - cipher;
        }
    };

    var _isUpperLetter = function(charCode) {
        return upperAcode <= charCode && charCode <= upperZcode;
    };

    var _overflowsUpper = function(charCode, cipher) {
        return charCode + cipher > upperZcode;
    };

    var _underflowsUpper = function(charCode, cipher) {
        return charCode - cipher < upperAcode;
    };

    var _isLowerLetter = function(charCode) {
        return lowerAcode <= charCode && charCode <= lowerZcode;
    };

    var _overflowsLower = function(charCode, cipher) {
        return charCode + cipher > lowerZcode;
    };

    var _underflowsLower = function(charCode, cipher) {
        return charCode - cipher < lowerAcode;
    };

    return {
      encode: encode,
      decode: decode
    };

})();
