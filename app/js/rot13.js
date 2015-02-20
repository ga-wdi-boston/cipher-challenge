'use strict';

var ROT13Cipher = (function () {
  var charCode = function(letter) {
    letter.charCodeAt();
  };
  var changePosition = function(position) {
    if (position + 13 > 122) {
      return position - 13;
    } else {
      return position + 13;
    }
  };
  var backToLetters = function(encodedPosition) {
    encodedPosition.fromCharCode();
  }

  var encode = function(word) {
    var wordArray = word.split();

    var charArray = wordArray.map(charCode);

    var encodedArray = charArray.map(changePosition);

    var encodedWordArray = encodedArray.map(backToLetters);

    var encodedWord = encodedWordArray.join('');
  }
  return {
    encode: encode
  };
})();
