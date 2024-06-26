export interface FormProps {
  readonly labelPosition: LabelPosition;
  readonly labelWidth: string | number;
  readonly labelSuffix: string;
  readonly showSuffix: boolean;
  readonly border?: boolean | undefined;
  readonly alignTop?: boolean | undefined;
}

export enum LabelPosition {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}
