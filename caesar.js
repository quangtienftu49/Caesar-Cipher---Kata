const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const encrypt = function(plaintext, key) {
  // IMPLEMENT ME
  let result = '';
  const newText = plaintext.toLowerCase();
  for (let i = 0; i < plaintext.length; i++) {
    if (alphabet.indexOf(plaintext[i]) !== -1) {
      if (alphabet[alphabet.indexOf(plaintext[i]) + key]) {
        result += alphabet[alphabet.indexOf(plaintext[i]) + key]
      } else {
        result += alphabet[(alphabet.indexOf(plaintext[i]) + key + 26) % 26]
      }
    } else {
      result += plaintext[i];
    }
  }
  return result;
};

module.exports = { encrypt };