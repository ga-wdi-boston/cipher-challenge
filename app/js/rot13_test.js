'use strict';

var ROT13Cipher = (function () {
  var plain = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var cipher = 'nopqrstuvwxyzabcdefghijklm'.split('');

  var index_word = function(word){
    // var word_index = [];
    var word_to_array = word.split('');

    return word_to_array.map(function(elem) { //using map returns the array of indexes
    // return word_to_array.forEach(function(elem) { //what is forEach returning?
        // console.log(elem); //works
        // console.log(plain); //works
        // console.log(plain.indexOf(elem)); //works
        // return plain.indexOf(elem);
        // var ind = (plain.indexOf(elem) + 13) % 26; //works
        var ind = plain.indexOf(elem);
        // return plain[ind]; // => cats
        return cipher[ind];
    });
    // return word_to_array;

  }; //end index_word

  // var encodeIt = function (){
  //   return
  // };

  // var _encoder = function(word){
  //   return word = ; //return encoded word
  // }


  // return {
  //   encode: encodeIt,
  //   decode: decodeIt
  // };

})();
