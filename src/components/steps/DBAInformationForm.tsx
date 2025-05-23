import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, VStack } from "@chakra-ui/react";
import * as yup from "yup";

import { useFormWizard } from "@/hooks/useFormWizard";
import { useFieldSchema } from "@/components/fields/useFieldSchema";
import { dbaFields } from "../fields/dbaFields";
import { GenericFieldRenderer } from "./GenericFieldRenderer";

const DBAInformationForm = () => {
  const schema = useFieldSchema(dbaFields);
  type FormValues = yup.InferType<typeof schema>;

  const { setFormData, goToNext, formData } = useFormWizard();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: formData as FormValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setFormData(data);
    goToNext();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack spacing={6}>
          <GenericFieldRenderer fields={dbaFields} />
          <Button type="submit" colorScheme="blue" alignSelf="flex-end">
            Siguiente
          </Button>
        </VStack>
      </form>
    </FormProvider>
  );
};

export default DBAInformationForm;
