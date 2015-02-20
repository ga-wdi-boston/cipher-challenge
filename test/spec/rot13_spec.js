'use strict';

describe('ROT13Cipher', function () {
  describe('#encode', function () {
    it('rotates each character in the string 13 places forward in the alphabet', function()
      expect(ROT13Cipher.encode("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm");
  });
  describe('#decode', function () {
  it('rotates each character in the string back 13 places in the alphabet', function(){
    expect(ROT13Cipher.decode("nopqrstuvwxyzabcdefghijklm").toBe("abcdefghijklmnopqrstuvwxyz");
  });
});

// describe('ROT13Cipher', function () {
//   var cipher = ROT13Cipher.Code(13);
//   describe('.encode', function () {
//     it('tests the encode',function(){
//       expect(cipher.encode("hello")).toEqual('uryyb');
//       expect(cipher.encode("jeff")).toEqual('wrss');
//       expect(cipher.encode("abcdefghijklmnopqrstuvwxyz")).toEqual('nopqrstuvwxyzabcdefghijklm');
//       expect(cipher.encode("je ff")).toEqual('wr ss');
//       expect(cipher.encode('Hello Jeff')).toEqual('Uryyb Wrss');
//     });
//   });
//   describe('.decode', function () {
//     it('tests the decode',function(){
//     expect(cipher.decode("uryyb")).toEqual('hello');
//     expect(cipher.decode("wrss")).toEqual('jeff');
//     expect(cipher.decode("wr ss")).toEqual('je ff');
//     expect(cipher.decode("nopqrstuvwxyzabcdefghijklm")).toEqual('abcdefghijklmnopqrstuvwxyz');
//     expect(cipher.encode('Uryyb Wrss')).toEqual('Hello Jeff');
//     });
//   });
