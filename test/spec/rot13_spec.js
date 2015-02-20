'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it('encodes a string using the caesar cipher', function() {
      expect(ROT13Cipher.encode("hello")).toEqual('uryyb');
    });
  });
});

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it('encodes a string using the caesar cipher', function() {
      expect(ROT13Cipher.encode("awesome")).toEqual('njrfbzr');
    });
  });
});

describe('ROT13Cipher', function () {
  describe('.decode', function () {
    it('decodes a string using the caesar cipher', function() {
      expect(ROT13Cipher.decode("uryyb")).toEqual('hello');
    });
  });
});

describe('ROT15Cipher', function () {
  describe('.encode', function () {
    it('encodes a string using the caesar cipher', function() {
      expect(ROT15Cipher.encode("hello")).toEqual('gdkkn');
    });
  });
});

describe('ROT15Cipher', function () {
  describe('.encode', function () {
    it('encodes a string using the caesar cipher', function() {
      expect(ROT15Cipher.encode("awesome")).toEqual('zvdrnld');
    });
  });
});

describe('ROT15Cipher', function () {
  describe('.decode', function () {
    it('decodes a string using the caesar cipher', function() {
      expect(ROT15Cipher.decode("gdkkn")).toEqual('hello');
    });
  });
});

describe('ROT13upcaseCipher', function () {
  describe('.encode', function () {
    it('encodes a string using the caesar cipher', function() {
      expect(ROT13Cipher.encode("UPCASE")).toEqual('hcpnfr');
    });
  });
});
