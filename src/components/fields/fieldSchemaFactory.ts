import * as yup from "yup";
import type { FieldConfig } from "@/types/FieldConfig";

export const generateYupSchema = (field: FieldConfig): yup.Schema<unknown> => {
  let schema: yup.Schema<unknown>;

  switch (field.type) {
    case "text":
    case "phone":
      schema = yup.string();
      break;

    case "email":
      schema = yup.string().email("Correo no válido");
      break;

    case "number":
      schema = yup
        .number()
        .typeError("Debe ser un número")
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? undefined : value
        );
      break;

    case "date":
      schema = yup
        .date()
        .transform((value, originalValue) =>
          originalValue === "" ? undefined : new Date(originalValue)
        );
      break;

    case "upload":
      schema = yup
        .mixed()
        .test("file-required", "Archivo requerido", (value) => {
          return value instanceof FileList ? value.length > 0 : false;
        });
      break;

    default:
      schema = yup.mixed();
  }

  const rule = field.validation?.rule;

  if (typeof rule === "string") {
    if (rule === "zip") {
      schema = (schema as yup.StringSchema).matches(
        /^\d{4,10}$/,
        "Código postal inválido"
      );
    }

    if (rule === "max100") {
      schema = (schema as yup.StringSchema).max(100, "Máximo 100 caracteres");
    }

    if (rule.startsWith("regex:")) {
      const pattern = rule.replace("regex:", "");
      try {
        const regex = new RegExp(pattern);
        schema = (schema as yup.StringSchema).matches(
          regex,
          "Formato inválido"
        );
      } catch {
        console.warn(`Regex inválido: ${pattern}`);
      }
    }
  }

  if (field.validation?.required) {
    schema = schema.required(`${field.label} es obligatorio`);
  }

  return schema;
};
