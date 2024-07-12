/*
 * @Description:
 * @Author: kangweize 2550121932@qq.com
 * @Date: 2024-06-25 14:35:53
 * @LastEditors: kangweize 2550121932@qq.com
 * @LastEditTime: 2024-07-03 15:55:55
 */
import { h, render } from "vue";
import "./index.less";

const offset = "16px";

/**
 * @description 创建一个提示信息
 *
 * @param options 提示信息的选项或字符串内容
 * @param options.position 提示信息的位置，可选值包括 'top'、'bottom'、'left'、'right'，默认为 'top'
 * @param options.duration 提示信息的显示时长，单位毫秒，默认为 4000
 * @param options.message 提示信息的内容，如果 options 为字符串，则直接作为提示信息的内容
 * @param options.type 提示信息的类型，可选值包括 'success' 'warning' 'info' 'error'，默认为 'info'
 * @param options.showClose 是否显示关闭按钮，默认为 false
 * @param options.dark 是否为暗色模式，默认为 false
 * @param options.plain 是否为朴素模式，默认为 false
 */
export function Message(options: TipOption | string) {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  const {
    message,
    type = "",
    duration = 4000,
    position = "top",
    showClose = false,
    dark = false,
    plain = false,
  } = options;

  const dom = document.createElement("div");

  const textDom = document.createElement("span");
  textDom.innerHTML = message;

  dom.appendChild(textDom);
  dom.className = `burger-message ${position}`;
  dom.style.animationName = position;
  dom.style.animationDuration = `${duration / 1000}s`;
  // 添加提示信息的类型样式
  if (type) dom.classList.add(type);
  if (plain) dom.classList.add("plain");
  if (dark) dom.classList.add("dark");

  // 添加关闭按钮
  if (showClose) {
    const handleClose = () => {
      dom.style.animationPlayState = "running";
      dom.style.animationName = `${position}-close-immediately`;
      dom.style.animationDuration = `${duration / 1000 / 4}s`;
      if (position !== "center") {
        dom.style[position] = "";
      }
      dom.removeEventListener("mouseout", handleMouseout);
    };

    const icon = h("img", {
      src: dark
        ? "burger-ui/assets/icon/delete-white.svg"
        : "burger-ui/assets/icon/delete.svg",
      alt: "delete",
      width: "16",
      class: "burger-message-close",
      onClick: handleClose,
    });
    render(icon, dom);
  }

  document.documentElement.appendChild(dom);

  // 鼠标悬停时触发的回调函数
  const handleMouseover = () => {
    // @ts-ignore
    const length = getComputedStyle(dom)[position];
    const opacity = getComputedStyle(dom).opacity;
    if (position === "center" && opacity === "1") {
      dom.style.animationPlayState = "paused";
      dom.style.animationName = ``;
    }
    if (position !== "center" && length === offset) {
      dom.style.animationPlayState = "paused";
      dom.style.animationName = ``;
      dom.style[position] = offset;
    }
  };

  // 鼠标移出时触发的回调函数
  const handleMouseout = () => {
    dom.style.animationPlayState = "running";
    dom.style.animationName = `${position}-close`;
    dom.style.animationDuration = `${duration / 1000}s`;
    if (position !== "center") {
      dom.style[position] = "";
    }
  };

  dom.addEventListener("mouseover", handleMouseover);
  dom.addEventListener("mouseout", handleMouseout);

  // 动画结束后移除提示信息
  dom.addEventListener("animationend", () => {
    dom.removeEventListener("mouseover", handleMouseover);
    dom.removeEventListener("mouseout", handleMouseout);
    document.documentElement.removeChild(dom);
  });
}

export interface TipOption {
  message: string;
  type?: "success" | "warning" | "info" | "error";
  duration?: number;
  position?: "top" | "bottom" | "left" | "right" | "center";
  showClose?: boolean;
  dark?: boolean;
  plain?: boolean;
}

export default Message;
