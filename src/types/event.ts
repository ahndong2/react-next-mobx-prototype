export interface CustomCheckboxTarget {
  id?: string;
  name?: string;
  value?: boolean;
  checked?: boolean;
}
export interface CustomCheckboxChangeType {
  target?: CustomCheckboxTarget;
}

export type CustomChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | CustomCheckboxChangeType;
