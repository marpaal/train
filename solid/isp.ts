// Author: Martín
// Example Interface Segregation Principle

interface PasswordHasher {
    hashPassword: (password: string) => string;
    // decodePasswordFromHash: (hash: string) => string;
}

interface Descryptable {
    decodePasswordFromHash: (hash: string) => string;
}

class Base64Hasher implements PasswordHasher, Descryptable {
    hashPassword(password: string): string {
        return 'hashed with base64';
    }

    decodePasswordFromHash(hash: string): string {
        return 'decoded from base64';
    }
}

