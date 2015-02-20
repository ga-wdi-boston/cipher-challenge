'use strict';

describe('ROT13Cipher', function () {
// var regularWord = cipher.encode('hello');
  //var cipher = ROT13Cipher;
  describe('ROT13Cipher namespace',function(){
    it('creates a new object for namespacing',function(){
      expect(ROT13Cipher).toEqual(jasmine.any(Object));
    });
  });

  describe('.encode', function () {
    it('returns the encrypted version of a word', function(){
      expect(ROT13Cipher.encode('hello')).toEqual('uryyb')
    });
  });

  describe('.decode', function () {
     it('returns the encrypted version of a word', function(){
      expect(ROT13Cipher.decode('hello')).toEqual('uryyb')
  });
     });

});

