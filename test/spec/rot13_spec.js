'use strict';

describe('ROT13Cipher', function () {
  describe('.encode', function () {
    it('should encode word to be encoded', function() {
      expect('not cool').toEqual('abg pbby');
    });
  });

  describe('.decode', function () {
    it('should decode encoded word', function() {
      expect('abg pbby').toEqual('not cool');
    });
  });
});
