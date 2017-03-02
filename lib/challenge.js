'use strict';

let ROT13Cipher = {
  encode : (string) => {
    let strArr = string.split('');
    let stringAsciiArr = strArr.map((el) => {
      let ascii = el.charCodeAt(0)+13;
      if (ascii>122){
        return ascii-26;
      }
      return ascii;
    });
    return stringAsciiArr.map((el) => String.fromCharCode(el)).join("");
  },

  decode : (string) => {
    let strArr = string.split('');
    let stringAsciiArr = strArr.map((el) => {
      let ascii = el.charCodeAt(0)-13;
      if (ascii<97){
        return ascii+26;
      }
      return ascii;
    });
    return stringAsciiArr.map((el) => String.fromCharCode(el)).join("");
  }
};

module.exports = ROT13Cipher;
