import { createHmac } from 'crypto';

export type DecryptDataParams = {
  encryptedData: string;
  iv: Uint8Array;
};

export const encryptPassword = (password: string): string => {
  return createHmac('sha1', process.env.PASSWORD_HASH_SECRET)
    .update(password)
    .digest('hex');
};

export const checkPassword = (
  password: string,
  passwordHash: string,
): boolean => {
  return password && encryptPassword(password) === passwordHash;
};
