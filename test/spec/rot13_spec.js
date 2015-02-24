'use strict';
describe('ROT13Cipher', function () {
  var cipher = ROT13Cipher;

  describe('.encode', function () {
    it('takes a string and returns an encoded string', function(){
      expect(cipher.encode('hello')).toEqual('uryyb');
      expect(cipher.encode('Bruins')).toEqual('Oehvaf');
      expect(cipher.encode('hello dude')).toEqual('uryyb qhqr');
      expect(cipher.encode('bruins rock')).toEqual('oehvaf ebpx');
    });
  });
  describe('.decode', function () {
    it('takes an encoded string and returns an decoded string', function(){
      expect(cipher.decode('uryyb')).toEqual('hello');
      expect(cipher.decode('Oehvaf')).toEqual('Bruins');
      expect(cipher.decode('uryyb qhqr')).toEqual('hello dude');
      expect(cipher.decode('oehvAf ebpx')).toEqual('bruiNs rock');
    });
  });
});
