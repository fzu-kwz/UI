/**
 * 将输入的参数处理为带px单位的字符串
 *
 * @param param 输入的字符串或数字
 * @returns 返回带px单位的字符串
 */
export const processedCssPx = (param: string | number) => {
  if (typeof param === 'number') {
    return `${param}px`;
  }
  if (typeof param === 'string') {
    if (param.endsWith('px')) {
      return param;
    } else {
      const parsedParam = parseInt(param, 10);
      if (isNaN(parsedParam)) {
        throw new Error(`Invalid CSS pixel value: ${param}`);
      }
      return `${parsedParam}px`;
    }
  }
};

/**
 * 创建一个防抖函数
 *
 * @param fn 要防抖的函数
 * @param delay 防抖延迟时间，默认为300毫秒
 * @returns 返回防抖后的函数
 */
export const createDebounce = (fn: Function, delay = 200) => {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
