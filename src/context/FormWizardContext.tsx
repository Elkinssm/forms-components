import { createContext, useCallback, useState, type ReactNode } from "react";
import { formSteps } from "@/constants/formSteps";
import type { FormStep } from "@/constants/formSteps";

type FormDataUnion = Record<string, unknown>;

interface FormWizardContextType {
  steps: FormStep[];
  selectedPage: number;
  formData: FormDataUnion;
  goToNext: () => void;
  goToPrevious: () => void;
  goToPage: (page: number) => void;
  setFormData: (data: FormDataUnion) => void;
}

const FormWizardContext = createContext<FormWizardContextType | undefined>(
  undefined
);

const FormWizardProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [formData, setFormDataState] = useState<FormDataUnion>({});

  const goToNext = useCallback(() => {
    setSelectedPage((prev) => Math.min(prev + 1, formSteps.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedPage((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToPage = useCallback((page: number) => {
    if (page >= 0 && page < formSteps.length) {
      setSelectedPage(page);
    }
  }, []);

  const setFormData = useCallback((data: FormDataUnion) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  return (
    <FormWizardContext.Provider
      value={{
        steps: formSteps,
        selectedPage,
        formData,
        goToNext,
        goToPrevious,
        goToPage,
        setFormData,
      }}
    >
      {children}
    </FormWizardContext.Provider>
  );
};

export { FormWizardProvider, FormWizardContext };
