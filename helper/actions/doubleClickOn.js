/**
 * Double click on the element.
 *
 * @param {string} element The element which is going to get double clicked.
 * 
 */

export default async (element) => { 
    await (await $(element)).doubleClick();
}