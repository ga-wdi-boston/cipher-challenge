//  no strict to allow no var

var ROTANYV2Cipher = (function() {
    var upperAcode = 'A'.charCodeAt(),
    upperZcode = 'Z'.charCodeAt(),
    lowerAcode = 'a'.charCodeAt(),
    lowerZcode = 'z'.charCodeAt();

    var encode = function(msg, passedCipher) {
        cipher = passedCipher % 26;             // no var here on purpose
        var uncodedArray = msg.split(''),       // as an experiment
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

    var decode = function(msg, passedCipher) {
        cipher = passedCipher % 26;             // no var here on purpose
        var codedArray = msg.split(''),         // as an experiment
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
