import { useContext } from "react";
import { FormWizardContext } from "@/context/FormWizardContext";

export const useFormWizard = () => {
  const context = useContext(FormWizardContext);
  if (!context) {
    throw new Error("useFormWizard must be used within a FormWizardProvider");
  }
  return context;
};
