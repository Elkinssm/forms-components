import { GenericForm } from "./GenericForm";
import { ownerSchema } from "@/schemas/ownerSchema";
import type { OwnerInfo } from "@/schemas/ownerSchema";

const OwnerInformationForm = () => (
  <GenericForm<OwnerInfo>
    schema={ownerSchema}
    fields={[{ name: "ownerName", label: "Owner Name" }]}
  />
);

export default OwnerInformationForm;
