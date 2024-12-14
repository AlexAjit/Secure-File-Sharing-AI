import { Crypto } from 'crypto-js';

export function encryptFile(file, password) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const arrayBuffer = reader.result;
      const wordArray = Crypto.lib.WordArray.create(arrayBuffer);
      const encrypted = Crypto.AES.encrypt(wordArray, password).toString();
      resolve(encrypted);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export function decryptFile(encryptedFile, password) {
  const decrypted = Crypto.AES.decrypt(encryptedFile, password);
  const decryptedWordArray = Crypto.enc.Utf8.parse(decrypted.toString(Crypto.enc.Utf8));
  const arrayBuffer = decryptedWordArray.toArrayBuffer();
  return new Blob([arrayBuffer]);
}