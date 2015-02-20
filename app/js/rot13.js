'use strict';


var ROT13Cipher = (function () {
  // your code here
  var plain = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var cipher = ['n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'];

  var encode = function(string){
    var result = [];
    var string = string.split('');
    for (var i = 0; i < string.length; i++) {
      var index = plain.indexOf(string[i]);
      if (index === -1){
        result.push(string[i])
      }else{
        result.push(string[i].replace(string[i], cipher[index]));
    }
    };

    return result.join('');
  };

  var decode = function(string){
    return encode(string);
  };

  return {
    encode: encode,
    decode: decode
  };

})();

console.log(ROT13Cipher.encode('Hey there I made a cipher'));
console.log(ROT13Cipher.decode('pbby anu?'));

var ROT25Cipher = (function () {
  var plain = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var cipher = ['z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];

  var encode = function(string){
    var result = [];
    var string = string.split('');
    for (var i = 0; i < string.length; i++) {
      var index = plain.indexOf(string[i]);
      if (index === -1){
        result.push(string[i])
      }else{
        result.push(string[i].replace(string[i], cipher[index]));
    }
    };

    return result.join('');
  };

  var decode = function(string){
    var result = [];
    var string = string.split('');
    for (var i = 0; i < string.length; i++) {
      var index = cipher.indexOf(string[i]);
      if (index === -1){
        result.push(string[i])
      }else{
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

console.log(ROT25Cipher.decode('Wd zqd sgd adrs qnv dudq'));
console.log(ROT25Cipher.encode('Omg thanks! I am the best!'));

var ROTnCipher = (function () {
  var plain = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var encode = function(string, n){
    var result = [];
    var string = string.split('');
    for (var i = 0; i < string.length; i++) {
      var index = plain.indexOf(string[i]);
      if (index === -1){
        result.push(string[i])
      } else if (index + n > 25){
          index = index + n - 26;
          result.push(string[i].replace(string[i], plain[index]));
      } else {
        result.push(string[i].replace(string[i], plain[index + n]));
      }

    };

    return result.join('');
  };

  var decode = function(string, n){
    var result = [];
    var string = string.split('');
    for (var i = 0; i < string.length; i++) {
      var index = plain.indexOf(string[i]);
      if (index === -1){
        result.push(string[i])
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
    decode: decode,
    decodeAll: decodeAll
  };


})();

// console.log(ROTnCipher.encode('mmm beer', 15));
// console.log(ROTnCipher.decode('bbb qttg', 15));
// console.log(ROTnCipher.encode('bb meow', 15));
// console.log(ROTnCipher.decode('qq btdl', 15));

 var decodeAll = function(string){
    for (var i = 0; i < 25; i++) {
       console.log(ROTnCipher.decode(string, i));
    };
  };

  var encodeAll = function(string){
  for(var i = 0; i < 25; i++) {
    console.log(ROTnCipher.decode(string, i));
  }
};

decodeAll('v funyy pel zlfrys gb fyrrc ng avtug');

console.log(ROTnCipher.encode('its a trick!', 15));
