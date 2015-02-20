'use strict';

describe('ROT13Cipher', function () {
  var plain = "hello hello";
  var coded = "uryyb uryyb";
  var cipher = ROT13Cipher;


  describe('.encode', function () {
    it('encodes a plain text string', function () {
      expect(cipher.encode(plain)).toEqual(coded)
    });
  });
  describe('.decode', function () {
    it('decodes an encoded string', function () {
      expect(cipher.decode(coded)).toEqual(plain)
    });
  });
});


describe('ROT25Cipher', function () {
  var plain = "hello hello";
  var coded = "gdkkn gdkkn";
  var cipher = ROT25Cipher;


  describe('.encode', function () {
    it('encodes a plain text string', function () {
      expect(cipher.encode(plain)).toEqual(coded)
    });
  });
  describe('.decode', function () {
    it('decodes an encoded string', function () {
      expect(cipher.decode(coded)).toEqual(plain)
    });
  });
});

describe('ROTnCipher', function () {
  var plain = "hello hello";
  var coded1 = "gdkkn gdkkn";
  var coded2 = "uryyb uryyb";
  var cipher = ROTnCipher;


  describe('.encode', function () {
    it('ROT0 does not change a string', function () {
      expect(cipher.encode(plain, 0)).toEqual(plain)
    });
  });

  describe('.encode', function () {
    it('encodes a plain text string in ROT25', function () {
      expect(cipher.encode(plain, 25)).toEqual(coded1)
    });
  });

  describe('.encode', function () {
    it('encodes a plain text string in ROT13', function () {
      expect(cipher.encode(plain, 13)).toEqual(coded2)
    });
  });

  describe('.decode', function () {
    it('decodes an encoded string in ROT13', function () {
      expect(cipher.decode(coded2, 13)).toEqual(plain)
    });
  });

  describe('.decode', function () {
    it('decodes an encoded string in ROT25', function () {
      expect(cipher.decode(coded1, 25)).toEqual(plain)
    });
  });
});

