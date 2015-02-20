'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it('encodes the word "hello"', function(){
      expect(cipher.encode('hello')).toEqual('uryyb');
    });
  });
  describe('.decode', function () {
    it('decodes the word "hello"', function(){
      expect(cipher.encode('uryyb')).toEqual('hello');
  });
});
});
