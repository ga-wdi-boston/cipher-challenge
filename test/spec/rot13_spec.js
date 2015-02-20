'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    // write your test here
    it('encodes a string using the caesar cipher', function() {
      expect(ROT13Cipher.encode('apple apple')).toEqual('nccyr nccyr');
    });
  });
  describe('.decode', function () {
    // write your test here
    it('decodes a string using the caesar cipher', function() {
      expect(ROT13Cipher.decode('nccyr')).toEqual('apple');
    });
  });
});

describe('ROT25Cipher', function() {
  var plain = "hello";
  var coded = "gdkkn";

   describe('.encode', function () {
    // write your test here
    it('encodes a string using the caesar cipher', function() {
      expect(ROT25Cipher.encode(plain)).toEqual(coded);
    });
  });
  describe('.decode', function () {
    // write your test here
    it('decodes a string using the caesar cipher', function() {
      expect(ROT25Cipher.decode(coded)).toEqual(plain);
    });
  });
});

describe('ROTnCipher', function() {
   describe('.encode', function () {
    it('encodes a string using the caesar cipher', function() {
      expect(ROTnCipher.encode('mmm beer', 15)).toEqual("bbb qttg");
    });
  });
  describe('.decode', function () {
    it('decodes a string using the caesar cipher', function() {
      expect(ROTnCipher.decode("bbb qttg", 15)).toEqual("mmm beer");
    });
  });
});
