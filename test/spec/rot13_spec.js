'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it("encodes a string using the Caeser Cipher ROT13", function(){
      expect(ROT13Cipher.Encode('hello').display()).toEqual('uryyb');
      expect(ROT13Cipher.Encode('jeff').display()).toEqual('wrss');
    });
  });
  describe('.decode', function () {
    it("deciphers a string in Caeser Cipher ROT13 to plain alphabetical order", function(){
      expect(ROT13Cipher.Encode('uryyb').display()).toBe('hello');
      expect(ROT13Cipher.Encode('wrss').display()).toBe('jeff');
    });
  });
});
