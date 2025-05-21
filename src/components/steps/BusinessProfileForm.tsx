import { GenericForm } from "./GenericForm";
import { businessProfileSchema } from "@/schemas/businessProfileSchema";
import type { BusinessProfile } from "@/schemas/businessProfileSchema";

const BusinessProfileForm = () => (
  <GenericForm<BusinessProfile>
    schema={businessProfileSchema}
    fields={[{ name: "industry", label: "Industry" }]}
  />
);

export default BusinessProfileForm;
