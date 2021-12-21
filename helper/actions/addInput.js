/**
 * Add input string in the element.
 *
 * @param {string} element The element which is going to get the input.
 * @param {string} input The input string, going to be in the input element.
 * 
 */

export default async (element, input) => {
    await (await $(element)).addValue(input);
}