import { KUIComponent, KUIComponentSize } from "../component";
import { SelectOption } from "./types";

export declare class KSelect extends KUIComponent {
  size: KUIComponentSize;

  options: Array<SelectOption>;

  allowClear: boolean;
}
