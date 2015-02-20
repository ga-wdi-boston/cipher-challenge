'use strict';

var ROT13Cipher = (function () {
  var plain = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var cipher = 'nopqrstuvwxyzabcdefghijklm'.split('');

  var encodeIt = function(word){
    var word_to_array = word.split('');

    return word_to_array.map(function(elem) { //using map returns the array of indexes
        var ind = plain.indexOf(elem);
        return cipher[ind];
    });
  }; //encodeIt

  var decodeIt = function(word){
    var word_to_array = word.split('');

    return word_to_array.map(function(elem) { //using map returns the array of indexes
        var ind = cipher.indexOf(elem);
        return plain[ind];
    });
  }; //decodeIt

   return {
     encode: encodeIt,
     decode: decodeIt
   };

})();

var ciphIt = ROT13Cipher;
var deciphIt = ROT13Cipher;
ciphIt.encode('hello').join(''); //=> 'uryyb'
deciphIt.decode('uryyb').join(''); //=> 'hello'
