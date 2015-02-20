'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it('returns an encoded version of a string', function() {
      expect(cipher.encode("hello").toEqual('uryyb'));
      expect(cipher.encode("jeff").toEqual('wrss'));
    });
  });

  describe('.decode', function () {
    it('returns a decoded version of the encoded string', function() {
      expect(cipher.decode('uryyb').toEqual('hello'));
      expect(cipher.decode('wrss').toEqual('jeff'));
    });
  });
});


