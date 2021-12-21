import Timeout from '../../config/config-data.json'
export default async (element) => {
    await browser.waitUntil(() => $(`${element}`), {
      timeout: Timeout.Max_Timeout,
      timeoutMsg: 'timeout',
    });
    return await $(`${element}`);
  }