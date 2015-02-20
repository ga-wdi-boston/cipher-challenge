
var alphabet, coded, i, ch, index;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var rotatedAlpha = "NOPQRSTUVWXYZABCDEFGHIJKLM";
var encoded = "";
var decoded = "";

var encode = function(message){
    var i = 0;
    while (i < message.length) {
            ch = message.charAt(i);
            index = alphabet.indexOf(ch);
            encoded = encoded + rotatedAlpha.charAt(index);
            i++;
    }
    return encoded;
};



var decode = function(encoded){
    var i = 0;
    while (i < encoded.length) {
            ch = encoded.charAt(i);
            index = alphabet.indexOf(ch);
            decoded = decoded + rotatedAlpha.charAt(index);
            i++;
    }
    return decoded;
};

    return {
        encode: encode,
        decode: decode
    };


})();


console.log(ROT13Cipher.encode("HELLO"));
console.log(ROT13Cipher.decode("URYYB"));
