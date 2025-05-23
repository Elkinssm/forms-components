import type { ObjectSchema, Maybe, AnyObject } from "yup";
import CorporateInfoForm from "@/components/steps/CorporateInfoForm";
import DBAInformationForm from "@/components/steps/DBAInformationForm";
import BusinessProfileForm from "@/components/steps/BusinessProfileForm";
import OwnerInformationForm from "@/components/steps/OwnerInformationForm";
import SendConfirm from "@/components/steps/SendConfirm";
import { corporateSchema } from "@/schemas/corporateSchema";
import { dbaSchema } from "@/schemas/dbaSchema";
import { businessProfileSchema } from "@/schemas/businessProfileSchema";
import { ownerSchema } from "@/schemas/ownerSchema";

export interface FormStep<T extends Maybe<AnyObject> = AnyObject> {
  title: string;
  description: string;
  component: React.FC;
  validationSchema?: ObjectSchema<T>;
}

export const formSteps: FormStep[] = [
  {
    title: "Corporate Information",
    description: "Enter legal info",
    component: CorporateInfoForm,
    validationSchema: corporateSchema,
  },
  {
    title: "DBA Information",
    description: "Enter DBA info",
    component: DBAInformationForm,
    validationSchema: dbaSchema,
  },
  {
    title: "Business Profile",
    description: "Enter business details",
    component: BusinessProfileForm,
    validationSchema: businessProfileSchema,
  },
  {
    title: "Owner Information",
    description: "Enter owner details",
    component: OwnerInformationForm,
    validationSchema: ownerSchema,
  },
  {
    title: "Confirmation and Validation",
    description: "Confirm your data",
    component: SendConfirm,
  },
];
