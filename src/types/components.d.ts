/**
 * Represents a form value with its validation status and error messages.
 *
 * @typedef {Object} FormValue
 */
export type FormValue<T> = {
    value: T,
    valid: boolean,
    errors: string[]
};

/**
 * Represents the props for InputText component.
 *
 * @typedef {Object} InputTextProps
 * @property {string} [name] - The name of the input field.
 * @property {string} [value] - The value of the input field.
 * @property {string[]} [errors] - An array of error messages.
 * @property {Function} handleOnChange - The function to handle onChange events for the input field.
 */
export type InputTextProps = {
    name?: string,
    value?: string,
    errors?: string[]
    handleOnChange: (value: string) => void,
};

/**
 * Represents the properties for rendering form errors.
 *
 * @typedef {Object} FormErrorProps
 * @property {string[]} errors - An array of error messages.
 */
export type FormErrorProps = {
    errors: string[],
};
