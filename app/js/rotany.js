'use strict';

var ROTANYCipher = (function() {

    var encode = function(string, num) {
        var array = string.split(''),
        letters = [],
        value;
        for (var i = 0; i < string.length; i++) {
            value = array[i].charCodeAt();
            if ( value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt() ) {
                if ( value + num > 'Z'.charCodeAt() ) {
                    value += (num - 1) - ( 'Z'.charCodeAt() - 'A'.charCodeAt() );
                } else {
                    value += num;
                }
            } else if ( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() ) {
                if ( value + num > 'z'.charCodeAt() ) {
                    value += (num - 1) - ( 'z'.charCodeAt() - 'a'.charCodeAt() );
                } else {
                    value += num;
                }
            }
            letters.push(String.fromCharCode(value));
        }
        return letters.join('');
    };

    var decode = function(string, num){
        var array = string.split(''),
        letters = [],
        value;
        for(var i = 0; i < string.length; i++) {
            value = array[i].charCodeAt();
            if ( value >= 'A'.charCodeAt() && value <= 'Z'.charCodeAt() ) {
                if ( value - num < 'A'.charCodeAt() ) {
                    value -= (num - 1) - ( 'Z'.charCodeAt() - 'A'.charCodeAt() );
                } else {
                    value -= num;
                }
            } else if ( value >= 'a'.charCodeAt() && value <= 'z'.charCodeAt() ) {
                if ( value - num < 'a'.charCodeAt() ) {
                    value -= (num - 1) - ( 'z'.charCodeAt() - 'a'.charCodeAt() );
                } else {
                    value -= num;
                }
            }
            letters.push(String.fromCharCode(value));
        }
        return letters.join('');
    };

    return {
      encode: encode,
      decode: decode
    };

})();
