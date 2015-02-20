'use strict';

var ROT13Cipher = (function () {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var splitString = function(string) {
    return string.split('');
  };

  var stringIndexes = function() {
    for (var i = 0; i < splitString.length; i++){
      return alphabet.indexOf(i);
    }
  };

  var newStringIndex = function(){
    for (var i = 0; i < stringIndexes.length; i++){
      if ((i + 13) > 25) {
        return number + 13 - 26;
      } else {
        return number + 13;
      }
    }
  };

  return {
    alphabet: alphabet,
    splitString: splitString,
    stringIndexes: stringIndexes
  };

})();




// Create letters array
// Split up a string
// var splitString = string.split('');

// Find the index of each match on alphabet array
// var stringIndexes = splitString.forEach(function(letter){
//   return indexOf(letter);
// })

//
// Add 13 to each index
// var newStringIndex = stringIndexes.forEach(function(number){
//   if ((number + 13) > 25) {
//     return number + 13 - 26
//   } else {
//     return number + 13
//   }
// });

// If the new index is greater than 25, subtract 26
// Get the value of each index from alphabet array
// var newStringArray = newStringIndex.forEach(function(number){
//   return alphabet[number];
// })

// Join the new array of letters
// return newStringArray.join('');


// var cipher = ROT13Cipher();
// cipher.encode('hello'); //=> 'uryyb'
// cipher.encode('jeff'); //=> 'wrss'
