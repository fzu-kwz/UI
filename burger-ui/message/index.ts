/*
 * @Description:
 * @Author: kangweize 2550121932@qq.com
 * @Date: 2024-06-25 14:35:53
 * @LastEditors: kangweize 2550121932@qq.com
 * @LastEditTime: 2024-07-03 15:55:55
 */
import { h, render } from 'vue';
import './index.less';

/**
 * @description 创建一个提示信息
 *
 * @param options 提示信息的选项或字符串内容
 * @param options.position 提示信息的位置，可选值包括 'top'、'bottom'、'left'、'right'，默认为 'top'
 * @param options.duration 提示信息的显示时长，单位毫秒，默认为 3000
 * @param options.message 提示信息的内容，如果 options 为字符串，则直接作为提示信息的内容
 * @param options.theme 提示信息的主题，可选值包括 'dark' 和 'light'，默认为 'dark'
 */
export function Message(options: TipOption | string) {
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
    showClose = false,
  } = options;

  const dom = document.createElement('div');

  const textDom = document.createElement('span');
  textDom.innerHTML = message;

  dom.appendChild(textDom);
  dom.className = `burger-message ${position}`;
  dom.style.animationName = position;
  dom.style.animationDuration = `${duration / 1000}s`;
  dom.className = `${dom.className} ${theme}`;

  // 添加关闭动画样式
  const setCloseStyle = () => {
    dom.style.animationPlayState = 'running';
    dom.style.animationName = `${position}-close`;
    dom.style.animationDuration = `${duration / 1000 / 4}s`;
  };

  // 添加关闭按钮
  if (showClose) {
    const icon = h('img', {
      src:
        theme === 'dark'
          ? 'burger-ui/assets/icon/delete-white.svg'
          : 'burger-ui/assets/icon/delete.svg',
      alt: 'delete',
      width: '16',
      class: 'burger-message-close',
      onClick: setCloseStyle,
    });
    render(icon, dom);
  }

  document.documentElement.appendChild(dom);

  // 鼠标经过时暂停动画
  dom.addEventListener('mouseover', () => {
    // @ts-ignore
    const length = getComputedStyle(dom)[position];
    const opacity = getComputedStyle(dom).opacity;
    if (position === 'center' && opacity === '1') {
      dom.style.animationPlayState = 'paused';
    }
    if (position !== 'center' && length === '60px') {
      dom.style.animationPlayState = 'paused';
    }
  });

  // 鼠标离开时设置关闭动画
  dom.addEventListener('mouseout', setCloseStyle);

  // 动画结束后从文档根元素中移除DOM节点
  dom.addEventListener('animationend', () => {
    document.documentElement.removeChild(dom);
  });
}

export interface TipOption {
  message: string;
  duration?: number;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  theme?: 'light' | 'dark';
  showClose?: boolean;
}

export default Message;
