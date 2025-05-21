import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import type { CorporateInfo } from "@/schemas/corporateSchema";
import { corporateSchema } from "@/schemas/corporateSchema";
import * as yup from "yup";
import { useFormWizard } from "@/hooks/useFormWizard";

const CorporateInfoForm: React.FC = () => {
  const { formData, setFormData, goToNext, selectedPage, steps } =
    useFormWizard();
  const [errors, setErrors] = useState<
    Partial<Record<keyof CorporateInfo, string>>
  >({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const values: CorporateInfo = {
      legalName: String(data.get("legalName") || ""),
      taxId: String(data.get("taxId") || ""),
    };

    try {
      const schema = steps[selectedPage]
        .validationSchema as typeof corporateSchema;
      await schema.validate(values, { abortEarly: false });

      setErrors({});
      setFormData(values);
      goToNext();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const fieldErrors: Partial<Record<keyof CorporateInfo, string>> = {};
        err.inner.forEach((error) => {
          if (error.path && !fieldErrors[error.path as keyof CorporateInfo]) {
            fieldErrors[error.path as keyof CorporateInfo] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.legalName}>
          <FormLabel htmlFor="legalName">Legal Name</FormLabel>
          <Input
            id="legalName"
            name="legalName"
            defaultValue={(formData as CorporateInfo)?.legalName || ""}
          />
          <FormErrorMessage>{errors.legalName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.taxId}>
          <FormLabel htmlFor="taxId">Tax ID</FormLabel>
          <Input
            id="taxId"
            name="taxId"
            defaultValue={(formData as CorporateInfo)?.taxId || ""}
          />
          <FormErrorMessage>{errors.taxId}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue" alignSelf="flex-end">
          Next
        </Button>
      </VStack>
    </Box>
  );
};

export default CorporateInfoForm;
