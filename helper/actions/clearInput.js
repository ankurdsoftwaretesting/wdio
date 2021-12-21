/**
 * Clears the element.
 *
 * @param {string} element The element which is going to be cleared i.e. no input in it.
 * 
 */

export default async (element) => {
    await (await $(element)).clearValue();
}