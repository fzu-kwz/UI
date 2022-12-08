export function createTip(tipOption: TipOption) {
  const tip = document.createElement("div");
  switch (tipOption.position) {
    case "top":
      tip.className = "tip top";
      tip.style.animationName = "top";
      break;
    case "bottom":
      tip.className = "tip bottom";
      tip.style.animationName = "bottom";
      break;
    case "left":
      tip.className = "tip left";
      tip.style.animationName = "left";
      break;
    case "right":
      tip.className = "tip right";
      tip.style.animationName = "right";
      break;
    default:
      tip.className = "tip top";
      tip.style.animationName = "top";
      break;
  }
  tip.innerHTML = tipOption.message;
  tipOption.duration
    ? (tip.style.animationDuration = tipOption.duration / 1000 + "s")
    : "";
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
}
export default createTip;
