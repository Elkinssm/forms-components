import type { FieldConfig } from "@/types/FieldConfig";

export const dbaFields: FieldConfig[] = [
  {
    type: "text",
    label: "Nombre",
    name: "name_fp",
    processors: [
      {
        processor: "mozart",
        name: "name",
        help: "structured message markdown",
        help_priority: 1,
      },
    ],
    columns: 1,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "text",
    label: "Apellido",
    name: "last_name",
    columns: 1,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "email",
    label: "Correo Electrónico",
    name: "email",
    columns: 1,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "phone",
    label: "Teléfono",
    name: "phone",
    columns: 1,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "date",
    label: "Fecha de nacimiento",
    name: "birth_date",
    columns: 2,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "text",
    label: "País",
    name: "country",
    columns: 2,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "text",
    label: "Ciudad",
    name: "city",
    columns: 2,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "upload",
    label: "Documento de identidad",
    name: "document_upload",
    columns: 2,
    flow_step: 1,
    validation: {
      required: true,
    },
  },
  {
    type: "text",
    label: "Ocupación",
    name: "occupation",
    columns: 2,
    flow_step: 1,
    validation: {
      required: true,
      rule: "max100",
    },
  },
  {
    type: "text",
    label: "Código Postal",
    name: "zip_code",
    columns: 2,
    flow_step: 1,
    validation: {
      required: true,
      rule: "zip",
    },
  },
  {
    type: "text",
    label: "País",
    name: "country",
    help: "Nombre del país donde resides",
    columns: 2,
    flow_step: 1,
    validation: { required: true },
  },
  {
    type: "text",
    label: "Test",
    name: "test_help",
    help: "Esto es un texto de ayuda visible en el icono",
    columns: 2,
    validation: {
      required: true,
    },
  },
];
