import { useMemo } from "react";
import * as yup from "yup";
import { generateYupSchema } from "./fieldSchemaFactory";
import type { FieldConfig } from "@/types/FieldConfig";

/**
 * Genera un schema yup dinámico desde una lista de campos.
 */
export function useFieldSchema(fields: readonly FieldConfig[]) {
  const schema = useMemo(() => {
    return yup.object(
      Object.fromEntries(
        fields.map((field) => [field.name, generateYupSchema(field)])
      )
    );
  }, [fields]);

  return schema;
}
