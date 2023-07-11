import * as crypto from 'react-native-crypto';

export function log(...msg) {
    console.log(`[${new Date().toISOString()}]`, ...msg);
}

// 连接信息
export const host = '127.0.0.1';
export const port = 12345;
export const conv = 255;

// 加密
// 3个参数的任意一个为空，则不启用加密
export const algorithm = 'aes-128-gcm';
export const key = 'aabbccddeeffgghh'; // crypto.randomBytes(128 / 8);
export const iv = 'aabbccddeeff'; // crypto.randomBytes(12);
// export const iv = '';
