'use strict';

const encode = function encode(user_string) {
  let rotated = [];
  user_string.split('').forEach((e) => {
    if (e === ' ') {
      rotated.push(e);
    } else if (e.charCodeAt() + 13 <= 122) {
      rotated.push(String.fromCharCode(e.charCodeAt() + 13));
    } else {
      rotated.push(String.fromCharCode(e.charCodeAt() + 13 - 26));
    }
  });
  return rotated.join('');
};


const rot25 = function encode(user_string) {
  let rotated = [];
  user_string.split('').forEach((e) => {
    if (e === ' ') {
      rotated.push(e);
    } else if (e.charCodeAt() + 25 <= 122) {
      rotated.push(String.fromCharCode(e.charCodeAt() + 25));
    } else {
      rotated.push(String.fromCharCode(e.charCodeAt() + 25 - 26));
    }
  });
  return rotated.join('');
};

module.exports = {
  encode,
  rot25,
};
