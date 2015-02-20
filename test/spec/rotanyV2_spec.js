'use strict';
describe('ROTANYV2Cipher', function () {
  var cipher = ROTANYV2Cipher;

  describe('.encode', function () {
    it('takes a string and returns an encoded string', function(){
      expect(cipher.encode('hello', 2)).toEqual('jgnnq');
      expect(cipher.encode('Bruins', 15)).toEqual('Qgjxch');
      expect(cipher.encode('hello dude', 2)).toEqual('jgnnq fwfg');
      expect(cipher.encode('bruins rock', 15)).toEqual('qgjxch gdrz');
    });
  });
  describe('.decode', function () {
    it('takes an encoded string and returns an decoded string', function(){
      expect(cipher.decode('jgnnq', 2)).toEqual('hello');
      expect(cipher.decode('Qgjxch', 15)).toEqual('Bruins');
      expect(cipher.decode('jgnnq fwfg', 2)).toEqual('hello dude');
      expect(cipher.decode('qgjxCh gdrz', 15)).toEqual('bruiNs rock');
    });
  });
});
