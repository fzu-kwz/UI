import { KUIComponent, KUIComponentSize } from "../component";

export type ButtonType = "primary" | "success" | "info" | "warning" | "danger";

export declare class KButton extends KUIComponent {
  type: ButtonType;

  size: KUIComponentSize;
}
