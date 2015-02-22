'use strict';

var ROTANYV3Cipher = (function() {
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    var _makeKeys = function(cipher) {
        var i, keys = {};

        for (i = 0; i < 26; i++) {
            keys[alpha[i]] = alpha[((i + cipher) % 26)];
        }
        for (i = 26; i < 52; i++) {
            keys[alpha[i]] = alpha[((i + cipher) % 26) + 26];
        }
        return keys;
    };

    var encode = function(msg, cipher) {
        cipher = _normalize(cipher);
        var keys = _makeKeys(cipher);
        msg = msg.split('');
        var i, encoded = [];

        for (i = 0; i < msg.length; i++) {
            encoded[i] = keys[msg[i]] || msg[i];
        }
        return encoded.join('');
    };

    var decode = function(msg, cipher) {
        cipher = _normalize(-cipher);
        return encode(msg, cipher);
    };

    var _normalize = function(cipher) {     // reduce any cipher to it's positive
        return ( (cipher % 26) + 26) % 26;  // equivalent in range [0, 26]
    };

    return {
        encode: encode,
        decode: decode
    };
})();
