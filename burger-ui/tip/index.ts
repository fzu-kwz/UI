export function createTip(tipOption: TipOption) {
  const tip = document.createElement("div");
  switch (tipOption.position) {
    case "top":
      tip.className = "burger-tip top";
      tip.style.animationName = "top";
      break;
    case "bottom":
      tip.className = "burger-tip bottom";
      tip.style.animationName = "bottom";
      break;
    case "left":
      tip.className = "burger-tip left";
      tip.style.animationName = "left";
      break;
    case "right":
      tip.className = "burger-tip right";
      tip.style.animationName = "right";
      break;
    case "center":
      tip.className = "burger-tip center";
      tip.style.animationName = "center";
      break;
    default:
      tip.className = "burger-tip top";
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
  position?: "top" | "bottom" | "left" | "right" | "center";
  theme?: "light" | "dark";
}
export default createTip;
