'use strict';

describe('ROT13Cipher', function () {

  describe('.encode', function () {
    it('creates a new object for namespacing',function(){
      expect(ROT13Cipher).toEqual(jasmine.any(Object));
    });

    it('encodes a word',function(){
      expect(ROT13Cipher.encode('hello')).toEqual('uryyb');
    });

  });

  describe('.decode', function () {
    it('decodes a word',function(){
      expect(ROT13Cipher.decode('uryyb')).toEqual('hello');
    });

  });
});
