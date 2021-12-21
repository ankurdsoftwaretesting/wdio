/**
 * Edit text into input element.
 *
 * @param {string} addText The element which is going to be cleared i.e. no input in it.
 * 
 */

 export default async (addText) => {
    await browser.keys(` - ${addText}`);
}