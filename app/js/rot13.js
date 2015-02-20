'use strict';

var ROT13Cipher = (function() {
    var encode = function(string){
      var array = string.split(''),
          letters = [],
          shift, value;
      for(var i=0; i<string.length; i++){
       value = array[i].charCodeAt();
        if (value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt()){
          if (value+13 > 'Z'.charCodeAt()){
           shift = value + 12 - ('Z'.charCodeAt() - 'A'.charCodeAt());
          }else{
           shift = value + 13;
          }
        }else if(( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() )) {
          if (value+13 > 'z'.charCodeAt()){
           shift = value + 12 - ('z'.charCodeAt() - 'a'.charCodeAt());
          }else{
           shift = value + 13;
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
      decode: encode
    };
})();




// Plain:    abcdefghijklmnopqrstuvwxyz
// Cipher:   nopqrstuvwxyzabcdefghijklm


// var string = 'uryyb';
// var array = string.split('');
// var letters = [];
// var shift;
// for(i=0; i<string.length; i++){
//     var value = array[i].charCodeAt();
//     if (value+13 > 'z'.charCodeAt()){
//         shift = value + 12 - ('z'.charCodeAt() - 'a'.charCodeAt());
//     }else{
//         shift = value + 13;
//     }
//     letters.push(String.fromCharCode(shift));
// }

// letters.join('');
