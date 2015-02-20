'use strict';

describe('ROT13Cipher', function () {
     var cipher = ROT13Cipher;

  describe('.encode', function () {
    it('returns the given string with each character shifted by 13'){
      expect(cipher.encode('hello')).toEqual('uryyb');
      expect(cipher.encode('Hello Charles')).toEqual('Uryyb Puneyrf')
    });
  });
  describe('.decode', function () {
it('returns the given string with each character shifted by 13'){
      expect(cipher.encode('uryyb')).toEqual('hello');
      expect(cipher.encode('Uryyb Puneyrf')).toEqual('Hello Charles');
    });
  });
});


/*
tests needed,

turns the alphabet into an array of characters

shifts the characters in place, 13 spaces


*/
