export interface Column {
  prop: string;
  label: string;
  width?: string;
  fixed?: "left" | "right";
  align?: "left" | "right" | "center";
  sort?: boolean;
}

export interface Row {
  [key: string]: any;
}

export interface Scroll {
  width?: string;
  height?: string;
}

export interface Sort {
  show: boolean;
  width?: string;
  align?: "left" | "right" | "center";
}
