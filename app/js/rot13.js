'use strict';

var alphabet, coded, i, ch, index;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var rotatedAlpha = "nopqrstuvwxyzabcdefghijklm";
var coded = "";
var message;
var decoded;

var ROT13Cipher = function () {


  var encode = function (message) {
    var i = 0;
    while (i < message.length) {
            ch = message.charAt(i);
            index = alphabet.indexOf(ch);
            coded = coded + rotatedAlpha.charAt(index);
            i++;
    }
    return coded;


        };
  var decode = function (coded) {
    var i = 0;
    while (i < coded.length) {
            ch = coded.charAt(i);
            index = alphabet.indexOf(ch);
            decoded = decoded + rotatedAlpha.charAt(index);
            i++;
    }
    return decoded;

        };





console.log(ROT13Cipher(message));
