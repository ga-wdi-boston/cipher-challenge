describe('ROT13Cipher', function () {
 var cipher = ROT13Cipher;

 describe('.encode', function () {
   it('encodes the phrase "hello"', function () {
     expect(cipher.encode('hello', 13)).toEqual('uryyb');
   });
 });
 describe('.decode', function () {
   it('decodes the phrase "uryyb"', function () {
     expect(cipher.decode('uryyb', 13)).toEqual('hello');
   });
 });
 describe('.encode', function () {
   it('encodes the phrase "hello dad"', function () {
     expect(cipher.encode('hellodad', 13)).toEqual('uryybqnq');
   });
 });
 describe('.decode', function () {
   it('decodes the phrase "uryyb qnq"', function () {
     expect(cipher.decode('uryybqnq', 13)).toEqual('hellodad');
   });
 });
});
