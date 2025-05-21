import * as yup from "yup";

export const corporateSchema = yup.object({
  legalName: yup.string().required("Legal name is required"),
  taxId: yup.string().required("Tax ID is required"),
});

export type CorporateInfo = yup.InferType<typeof corporateSchema>;
