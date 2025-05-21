import * as yup from "yup";

export const dbaSchema = yup.object({
  dbaName: yup.string().required("DBA Name is required"),
});

export type DbaInfo = yup.InferType<typeof dbaSchema>;
