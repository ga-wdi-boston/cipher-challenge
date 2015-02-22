'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    expect(ROT13Cipher.encode('banana')).toEqual('ananab');
  });
  describe('.decode', function () {
    expect(ROT13Cipher.decode('jhaqreone')).toEqual('wunderbar');
  });
});
