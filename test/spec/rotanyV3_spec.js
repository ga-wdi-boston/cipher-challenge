'use strict';
describe('ROTANYV3Cipher', function () {
  var cipher = ROTANYV3Cipher;

  describe('.encode', function () {
    it('takes a string and returns an encoded string', function(){
      cipher.initialize(2);
      expect(cipher.encode('hello')).toEqual('jgnnq');
      expect(cipher.encode('hello dude')).toEqual('jgnnq fwfg');
      cipher.initialize(15);
      expect(cipher.encode('Bruins')).toEqual('Qgjxch');
      expect(cipher.encode('bruins rock')).toEqual('qgjxch gdrz');
      cipher.initialize(2000000);
      expect(cipher.encode('Bruins')).toEqual('Dtwkpu');
    });
  });
  describe('.decode', function () {
    it('takes an encoded string and returns an decoded string', function(){
      cipher.initialize(2);
      expect(cipher.decode('jgnnq', 2)).toEqual('hello');
      expect(cipher.decode('jgnnq fwfg', 2)).toEqual('hello dude');
      cipher.initialize(15);
      expect(cipher.decode('Qgjxch', 15)).toEqual('Bruins');
      expect(cipher.decode('qgjxCh gdrz', 15)).toEqual('bruiNs rock');
      cipher.initialize(2000000);
      expect(cipher.decode('Dtwkpu', 2000000)).toEqual('Bruins');
    });
  });
});
