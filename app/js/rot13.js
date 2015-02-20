'use strict';

var ROT13Cipher = (function () {
  var plain = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var cipher = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];

  var encode = function(string) {
    var result = [];
    var string = string.toLowerCase().split('');
    for (var i = 0; i < string.length; i++) {

      var index = plain.indexOf(string[i]);
        if (index === -1) {
          result.push(string[i]);
        } else {
          result.push(string[i].replace(string[i], cipher[index]));
        }
    };
    return result.join('');
  };

  var decode = function(string) {
    return encode(string);
  };

  return {
    encode: encode,
    decode: decode
  };
})();















var ROT25Cipher = (function () {
  var plain = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var cipher = ["z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"];

  var encode = function(string) {
    var result = [];
    var string = string.toLowerCase().split('');
    for (var i = 0; i < string.length; i++) {

      var index = plain.indexOf(string[i]);
        if (index === -1) {
          result.push(string[i]);
        } else {
          result.push(string[i].replace(string[i], cipher[index]));
        }
    };
    return result.join('');

  };

  var decode = function(string) {
        var result = [];
    var string = string.toLowerCase().split('');
    for (var i = 0; i < string.length; i++) {

      var index = cipher.indexOf(string[i]);
        if (index === -1) {
          result.push(string[i]);
        } else {
          result.push(string[i].replace(string[i], plain[index]));
        }
    };
    return result.join('');

  };

  return {
    encode: encode,
    decode: decode
  };

})();


var ROTnCipher = (function () {
  var plain = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


  var encode = function(string, n) {
    var result = [];
    var string = string.toLowerCase().split('');
    for (var i = 0; i < string.length; i++) {

      var index = plain.indexOf(string[i]);
        if (index === -1) {
          result.push(string[i]);
        } else if (index + n > 25){
          index = index + n - 26;
          result.push(string[i].replace(string[i], plain[index]));
        } else {
          result.push(string[i].replace(string[i], plain[index + n]));
        }
    };
    return result.join('');

  };

  var decode = function(string, n) {
    var result = [];
    var string = string.toLowerCase().split('');
    for (var i = 0; i < string.length; i++) {

      var index = plain.indexOf(string[i]);
        if (index === -1) {
          result.push(string[i]);
        } else if (index - n < 0){
          index = index - n + 26;
          result.push(string[i].replace(string[i], plain[index]));
        } else {
          result.push(string[i].replace(string[i], plain[index - n]));
        }
    };
    return result.join('');

  };

  return {
    encode: encode,
    decode: decode
  };

})();


var allciphers = function(string) {
  for(var i = 0; i < 25; i++) {
    console.log(ROTnCipher.decode(string, i));
  }
}
