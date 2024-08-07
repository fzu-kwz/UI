export interface Column {
  prop: string;
  label?: string;
  width?: string;
  fixed?: 'left' | 'right';
  align?: 'left' | 'right' | 'center';
  sort?: boolean;
  ellipsis?: boolean;
}

export interface Row {
  [key: string]: any;
}
