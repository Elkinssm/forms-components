import * as yup from "yup";

export const businessProfileSchema = yup.object({
  industry: yup.string().required("Industry is required"),
});

export type BusinessProfile = yup.InferType<typeof businessProfileSchema>;
