'use strict';

describe('ROTCipher', function () {
  describe('.encode', function () {
    it("will encode a string", function() {
      var cipher = ROTCipher.Code(13);
      expect(cipher.encode('hello')).toBe('uryyb');
    });
    it("will encode a string with spaces", function() {
      var cipher = ROTCipher.Code(13);
      expect(cipher.encode('hello dolly')).toBe('uryyb qbyyl');
    });
    it("will encode a string with a different key", function() {
      var cipher = ROTCipher.Code(8);
      expect(cipher.encode('hello')).toBe('pmttw');
    });
    it("will encode a string with uppercase letters", function() {
      var cipher = ROTCipher.Code(8);
      expect(cipher.encode('HELLO')).toBe('pmttw');
    });
  });
  describe('.decode', function () {
    it("will decode a string", function() {
      var cipher = ROTCipher.Code(13);
      expect(cipher.encode('uryyb')).toBe('hello');
    });
    it("will decode a string with spaces", function() {
      var cipher = ROTCipher.Code(13);
      expect(cipher.encode('uryyb qbyyl')).toBe('hello dolly');
    });
    it("will decode a string with a different key", function() {
      var cipher = ROTCipher.Code(8);
      expect(cipher.decode('pmttw')).toBe('hello');
    });
    it("will decode a string with upercase letters", function() {
      var cipher = ROTCipher.Code(8);
      expect(cipher.decode('PmTtw')).toBe('hello');
    });
  });
});

