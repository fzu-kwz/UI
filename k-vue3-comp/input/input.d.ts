import { KUIComponent, KUIComponentSize } from "../component";

export type InputType = "text" | "password";

export declare class KInput extends KUIComponent {
  modelValue: string;

  type: InputType;

  size: KUIComponentSize;

  allowClear: boolean;

  allowView: boolean;
}
