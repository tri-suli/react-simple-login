/**
 * Checks if a given string is a valid email address.
 *
 * @param {string} email - The string to be checked.
 * @returns {boolean} - Returns true if the string is a valid email address, otherwise false.
 */
export const isEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if a value is empty.
 *
 * @param {string|Array<unknown>} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
export const isEmpty = (value: string|Array<unknown>): boolean => {
    return !value.length;
}
