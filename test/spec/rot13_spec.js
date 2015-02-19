'use strict';

describe('ROT13Cipher', function () {
  var cipher = ROT13Cipher.Code(13);
  describe('.encode', function () {
    it('tests the encode',function(){
      expect(cipher.encode("hello")).toEqual('uryyb');
      expect(cipher.encode("jeff")).toEqual('wrss');
      expect(cipher.encode("abcdefghijklmnopqrstuvwxyz")).toEqual('nopqrstuvwxyzabcdefghijklm');
      expect(cipher.encode("je ff")).toEqual('wr ss');
      expect(cipher.encode('Hello Jeff')).toEqual('Uryyb Wrss');
    });
  });
  describe('.decode', function () {
    it('tests the decode',function(){
    expect(cipher.decode("uryyb")).toEqual('hello');
    expect(cipher.decode("wrss")).toEqual('jeff');
    expect(cipher.decode("wr ss")).toEqual('je ff');
    expect(cipher.decode("nopqrstuvwxyzabcdefghijklm")).toEqual('abcdefghijklmnopqrstuvwxyz');
    expect(cipher.encode('Uryyb Wrss')).toEqual('Hello Jeff');
    });
  });
  var cipher8 = ROT13Cipher.Code(8);
  describe('.encode', function () {
    it('tests the encode',function(){
      expect(cipher8.encode("the dog is far")).toEqual('bpm lwo qa niz');
    });
  });
  describe('.decode', function () {
    it('tests the decode',function(){
    expect(cipher8.decode("bpm lwo qa niz")).toEqual('the dog is far');
    });
  });

  var cipher25 = ROT13Cipher.Code(25);
  describe('.encode', function () {
    it('tests the encode',function(){
      expect(cipher25.encode("Hello Jeff")).toEqual('Gdkkn Idee');
    });
  });
  describe('.decode', function () {
    it('tests the decode',function(){
    expect(cipher25.decode('Gdkkn Idee')).toEqual("Hello Jeff");
    });
  });
});
