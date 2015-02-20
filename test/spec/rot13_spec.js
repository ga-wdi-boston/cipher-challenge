'use strict';

describe('ROT13Cipher', function () {
  var original = 'hello hello';
  var updated ='uryyb uryyb';
  var cipher = ROT13Cipher;

  describe('.encode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.encode(original)).toEqual(updated);
    });
  });

 describe('.decode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.decode(updated)).toEqual(original);
    });
  });
});


describe('ROT25Cipher', function () {
  var original = 'hello hello';
  var updated ='gdkkn gdkkn';
  var cipher = ROT25Cipher;

  describe('.encode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.encode(original)).toEqual(updated);
    });
  });

 describe('.decode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.decode(updated)).toEqual(original);
    });
  });
});

describe('ROTnCipher', function () {
  var original = 'hello hello';
  var updated1 = 'uryyb uryyb'
  var updated2 ='gdkkn gdkkn';
  var cipher = ROTnCipher;

  describe('.encode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.encode(original, 0)).toEqual(original);
    });
  });
  describe('.encode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.encode(original, 13)).toEqual(updated1);
    });
  });
  describe('.encode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.encode(original, 25)).toEqual(updated2);
    });
  });
 describe('.decode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.decode(updated1, 13)).toEqual(original);
    });
  });
 describe('.decode', function () {
    it('returns the string coded in the caesar cipher', function () {
      expect(cipher.decode(updated2, 25)).toEqual(original);
    });
  });
});
