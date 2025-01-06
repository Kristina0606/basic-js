/** @format */

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    return this.process(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    return this.process(encryptedMessage, key, "decrypt");
  }

  process(text, key, method) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (alphabet.includes(char)) {
        const textIndex = alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);

        let newIndex;
        if (method === "encrypt") {
          newIndex = (textIndex + keyIndexInAlphabet) % alphabet.length;
        } else {
          newIndex =
            (textIndex - keyIndexInAlphabet + alphabet.length) %
            alphabet.length;
        }

        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

// Пример использования:
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt("attack at dawn!", "alphonse")); // 'AEIHQX SX DLLU!'
console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse")); // 'ATTACK AT DAWN!'
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse")); // '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse")); // '!NWAD TA KCATTA'

module.exports = {
  VigenereCipheringMachine,
};
