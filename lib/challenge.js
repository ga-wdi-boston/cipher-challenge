'use strict';

let ROT13Cipher = {
  encode : function (str) {
      let output = '';
      const rot = 13;
      for (var i = 0; i < str.length; i++) {
        let c = str[i];
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 122) {
          if ((code >= 65) && (code <= 90)) {
            c = String.fromCharCode(((code - 65 + rot) % 26) + 65);
          }
          else if ((code >= 97) && (code <= 122)) {
				    c = String.fromCharCode(((code - 97 + rot) % 26) + 97);
          }
        }
        output += c;
      }
      return output;
    }
};



module.exports = ROT13Cipher;
