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
      return `${parseInt(param)}px`;
    }
  }
};
