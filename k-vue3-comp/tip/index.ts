export function createTip(tipOption: TipOption) {
  const tip = document.createElement("div");
  switch (tipOption.position) {
    case "top":
      tip.className = "k-tip top";
      tip.style.animationName = "top";
      break;
    case "bottom":
      tip.className = "k-tip bottom";
      tip.style.animationName = "bottom";
      break;
    case "left":
      tip.className = "k-tip left";
      tip.style.animationName = "left";
      break;
    case "right":
      tip.className = "k-tip right";
      tip.style.animationName = "right";
      break;
    case "center":
      tip.className = "k-tip center";
      tip.style.animationName = "center";
      break;
    default:
      tip.className = "k-tip top";
      tip.style.animationName = "top";
      break;
  }
  tip.innerHTML = tipOption.message;
  tipOption.duration
    ? (tip.style.animationDuration = tipOption.duration / 1000 + "s")
    : "";
  tip.className = tipOption.theme
    ? tip.className + " " + tipOption.theme
    : tip.className + " dark";
  document.documentElement.appendChild(tip);
  setTimeout(
    () => {
      document.documentElement.removeChild(tip);
    },
    tipOption.duration ? tipOption.duration : 3000
  );
}

import "./index.less";
export interface TipOption {
  message: string;
  duration?: number;
  position?: string;
  theme?: string;
}
export default createTip;
