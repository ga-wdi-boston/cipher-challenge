'use strict';

describe('ROT25Cipher', function () {
  var cipher = ROT25Cipher;

  describe('.encode', function () {
    it('encodes the word "caitlyn"', function () {
      expect(cipher.encode('caitlyn')).toEqual('bzhskxm');
    });
  });

  describe('.decode', function () {
    it ('decodes the word "bzhskxm"', function () {
      expect(cipher.decode('bzhskxm')).toEqual('caitlyn');
    });
  });
});
