export interface Processor {
  processor: string;
  name: string;
  help?: string;
  help_priority?: number;
}

export interface FieldValidation {
  required?: boolean;
  rule?: string;
}

export type FieldType =
  | "text"
  | "date"
  | "upload"
  | "email"
  | "phone"
  | "select"
  | "checkbox"
  | "radio"
  | "textarea"
  | "number";

export interface FieldConfig {
  type: FieldType;
  label: string;
  name: string;
  columns?: 1 | 2;
  flow_step?: number;
  validation?: FieldValidation;
  processors?: Processor[];
  help?: string;
}
