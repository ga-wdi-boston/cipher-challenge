'use strict';

describe('ROT13Cipher', function () {
  var cipher = ROT13Cipher;

  describe('.encode', function () {
    it('encodes the phrase "hello"', function () {
      expect(cipher.encode('hello')).toEqual('uryyb');
    });
  });
  describe('.decode', function () {
    it('decodes the phrase "uryyb"', function () {
      expect(cipher.decode('uryyb')).toEqual('hello');
    });
  });
});
