'use strict';

describe('ROT13Cipher', function () {
  var cipher = ROT13Cipher;

  describe('.encode', function () {
    it('encodes the word "caitlyn"', function () {
      expect(cipher.encode('caitlyn')).toEqual('pnvgyla');
    });
  });

  describe('.decode', function () {
    it ('decodes the word "pnvgyla"', function () {
      expect(cipher.decode('pnvgyla')).toEqual('caitlyn');
    });
  });
});
