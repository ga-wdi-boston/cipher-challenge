'use strict';

var ROTANYV3Cipher = (function() {
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    cipher, encryptKeys, decryptKeys;

    var initialize = function(initialCipher){
        cipher = _normalize(initialCipher);
        encryptKeys = _rotateAlphabet();
        cipher = _normalize(-cipher);
        decryptKeys = _rotateAlphabet();
    };

    var encode = function(msg) {
        return _translate(msg, encryptKeys);
    };

    var decode = function(msg) {
        return _translate(msg, decryptKeys);
    };

    var _rotateAlphabet = function() {
        var i, keys = {};

        for (i = 0; i < 26; i++) {
            keys[alpha[i]] = alpha[((i + cipher) % 26)];
        }
        for (i = 26; i < 52; i++) {
            keys[alpha[i]] = alpha[((i + cipher) % 26) + 26];
        }
        return keys;
    };

    var _translate = function(msg, keys) {
        msg = msg.split('');
        var i, encoded = [];

        for (i = 0; i < msg.length; i++) {
            encoded[i] = keys[msg[i]] || msg[i];
        }
        return encoded.join('');

    };

    var _normalize = function(cipher) {     // reduce any cipher to it's positive
        return ( (cipher % 26) + 26) % 26;  // equivalent in range [0, 26]
    };

    return {
        encode: encode,
        decode: decode,
        initialize: initialize
    };
}());
