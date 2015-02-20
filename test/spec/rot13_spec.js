'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it("encodes a string into caesar cipher code", function() {
        expect(ROT13Cipher.Encode('hello').display()).toEqual('uryyb');
        expect(ROT13Cipher.Encode('pat').display()).toEqual('cng');
      });
  });
  describe('.decode', function () {
    it("decodes a string into caesar cipher code", function() {
        expect(ROT13Cipher.Encode('uryyb').display()).toEqual('hello');
        expect(ROT13Cipher.Encode('cng').display()).toEqual('pat');
      });
  });
});

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it("encodes a string into caesar cipher 25 code", function() {
        expect(ROT13Cipher.Encode('hello pat').display()).toEqual('uryyb cng');
      });
  });
  describe('.decode', function () {
    it("decodes a string into caesar cipher code", function() {
        expect(ROT13Cipher.Encode('uryyb cng').display()).toEqual('hello pat');
      });
  });
});
