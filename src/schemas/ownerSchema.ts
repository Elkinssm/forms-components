import * as yup from "yup";

export const ownerSchema = yup.object({
  ownerName: yup.string().required("Owner name is required"),
});

export type OwnerInfo = yup.InferType<typeof ownerSchema>;
