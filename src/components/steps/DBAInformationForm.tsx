import { GenericForm } from "./GenericForm";
import { dbaSchema } from "@/schemas/dbaSchema";
import type { DbaInfo } from "@/schemas/dbaSchema";

const DBAInformationForm = () => (
  <GenericForm<DbaInfo>
    schema={dbaSchema}
    fields={[{ name: "dbaName", label: "DBA Name" }]}
  />
);

export default DBAInformationForm;
