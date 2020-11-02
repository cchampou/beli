export const limit = (text, characters) => `${text.slice(0, characters)}...`;

export const HTMLToString = (string) => string.replace(/<[^>]*>?/gm, '');
