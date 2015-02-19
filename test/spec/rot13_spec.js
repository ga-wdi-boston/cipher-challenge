'use strict';

describe('ROT13Cipher', function () {
  var cipher = ROT13Cipher.Code(13);
  describe('.encode', function () {
    it('tests the encode',function(){
      expect(cipher.encode("hello")).toEqual('uryyb');
      expect(cipher.encode("jeff")).toEqual('wrss');
      expect(cipher.encode("abcdefghijklmnopqrstuvwxyz")).toEqual('nopqrstuvwxyzabcdefghijklm');
    });
  });
  describe('.decode', function () {
    it('tests the decode',function(){
    expect(cipher.decode("uryyb")).toEqual('hello');
    expect(cipher.decode("wrss")).toEqual('jeff');
    expect(cipher.decode("nopqrstuvwxyzabcdefghijklm")).toEqual('abcdefghijklmnopqrstuvwxyz');
    });
  });
});
