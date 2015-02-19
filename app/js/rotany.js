'use strict';

var ROTANYCipher = (function() {
    var encode = function(string, num){
      var array = string.split(''),
          letters = [],
          shift, value;
      for(var i=0; i<string.length; i++){
       value = array[i].charCodeAt();
        if (value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt()){
          if (value+num > 'Z'.charCodeAt()){
           shift = value + (num - 1) - ('Z'.charCodeAt() - 'A'.charCodeAt());
          }else{
           shift = value + num;
          }
        }else if(( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() )) {
          if (value+num > 'z'.charCodeAt()){
           shift = value + (num - 1) - ('z'.charCodeAt() - 'a'.charCodeAt());
          }else{
           shift = value + num;
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
          shift, value;
      for(var i=0; i<string.length; i++){
       value = array[i].charCodeAt();
        if (value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt()){
          if (value-num < 'A'.charCodeAt()){
           shift = value - (num - 1) + ('Z'.charCodeAt() - 'A'.charCodeAt());
          }else{
           shift = value - num;
          }
        }else if(( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() )) {
          if (value-num < 'a'.charCodeAt()){
           shift = value - (num - 1) + ('z'.charCodeAt() - 'a'.charCodeAt());
          }else{
           shift = value - num;
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
