'use strict';

var ROTANYCipher = (function() {
    var encode = function(string, num){
      var array = string.split(''),
          letters = [],
          mod = num % 26,
          shift, value;
      for(var i=0; i<string.length; i++){
       value = array[i].charCodeAt();
        if (value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt()){
          if (value+mod > 'Z'.charCodeAt()){
           shift = value + (mod - 1) - ('Z'.charCodeAt() - 'A'.charCodeAt());
          }else{
           shift = value + mod;
          }
        }else if(( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() )) {
          if (value+mod > 'z'.charCodeAt()){
           shift = value + (mod - 1) - ('z'.charCodeAt() - 'a'.charCodeAt());
          }else{
           shift = value + mod;
          }
        }else{
          shift = value;
        }
       letters.push(String.fromCharCode(shift));
      }
      return letters.join('');
    };
    var decode = function(string, num){
      var array = string.split(''),
          letters = [],
          mod = num % 26,
          shift, value;
      for(var i=0; i<string.length; i++){
       value = array[i].charCodeAt();
        if (value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt()){
          if (value-mod < 'A'.charCodeAt()){
           shift = value - (mod - 1) + ('Z'.charCodeAt() - 'A'.charCodeAt());
          }else{
           shift = value - mod;
          }
        }else if(( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() )) {
          if (value-mod < 'a'.charCodeAt()){
           shift = value - (mod - 1) + ('z'.charCodeAt() - 'a'.charCodeAt());
          }else{
           shift = value - mod;
          }
        }else{
          shift = value;
        }
       letters.push(String.fromCharCode(shift));
      }
      return letters.join('');
    };
    return{
      encode: encode,
      decode: decode
    };
})();


var cipher = ROTANYCipher;

console.log(cipher.encode('Bruins', 2000000));
console.log(cipher.decode('Dtwkpu', 2000000));
