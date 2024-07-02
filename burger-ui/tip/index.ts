/**
 * @description 创建一个提示信息
 *
 * @param options 提示信息的选项或字符串内容
 * @param options.position 提示信息的位置，可选值包括 'top'、'bottom'、'left'、'right'，默认为 'top'
 * @param options.duration 提示信息的显示时长，单位毫秒，默认为 3000
 * @param options.message 提示信息的内容，如果 options 为字符串，则直接作为提示信息的内容
 * @param options.theme 提示信息的主题，可选值包括 'dark' 和 'light'，默认为 'dark'
 */
export function createTip(options: TipOption | string) {
  debugger;
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  const {
    message,
    duration = 3000,
    position = 'top',
    theme = 'dark',
  } = options;
  const tip = document.createElement('div');

  tip.innerHTML = message;
  tip.className = `burger-tip ${position}`;
  tip.style.animationName = position;
  tip.style.animationDuration = `${duration / 1000}s`;
  tip.className = `${tip.className} ${theme}`;
  document.documentElement.appendChild(tip);
  setTimeout(() => {
    document.documentElement.removeChild(tip);
  }, duration || 3000);
}

import './index.less';
export interface TipOption {
  message: string;
  duration?: number;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  theme?: 'light' | 'dark';
}
export default createTip;
