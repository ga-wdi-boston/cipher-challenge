'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it('rotates each character in the string 13 places forward in the alphabet', function()
      expect(ROT13Cipher.encode("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm");
  });
  describe('.decode', function () {
  it('rotates each character in the string back 13 places in the alphabet', function(){
    expect(ROT13Cipher.decode("nopqrstuvwxyzabcdefghijklm").toBe("abcdefghijklmnopqrstuvwxyz");
  });
});
