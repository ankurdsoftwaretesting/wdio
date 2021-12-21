/**
 * Click on the element.
 *
 * @param {string} element The element which is going to get clicked.
 * 
 */
export default async (element) => {
    await (await $(element)).click();
}