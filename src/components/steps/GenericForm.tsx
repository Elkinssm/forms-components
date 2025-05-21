import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormWizard } from "@/hooks/useFormWizard";
import { useState } from "react";
import * as yup from "yup";

type Props<T extends yup.AnyObject> = {
  schema: yup.ObjectSchema<T>;
  fields: Array<{
    name: keyof T;
    label: string;
  }>;
};

export function GenericForm<T extends yup.AnyObject>({
  schema,
  fields,
}: Props<T>) {
  const { formData, setFormData, goToNext } = useFormWizard();
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = Object.fromEntries(form.entries()) as Record<
      keyof T,
      string
    >;

    try {
      await schema.validate(values, { abortEarly: false });
      setErrors({});
      setFormData(values);
      goToNext();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: Partial<Record<keyof T, string>> = {};
        for (const e of err.inner) {
          if (e.path) newErrors[e.path as keyof T] = e.message;
        }
        setErrors(newErrors);
      }
    }
  };

  const typedFormData = formData as Partial<Record<keyof T, string>>;

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        {fields.map(({ name, label }) => (
          <FormControl key={String(name)} isInvalid={!!errors[name]}>
            <FormLabel htmlFor={String(name)}>{label}</FormLabel>
            <Input
              id={String(name)}
              name={String(name)}
              defaultValue={typedFormData[name] ?? ""}
            />
            <FormErrorMessage>{errors[name]}</FormErrorMessage>
          </FormControl>
        ))}

        <Button type="submit" colorScheme="blue" alignSelf="flex-end">
          Next
        </Button>
      </VStack>
    </Box>
  );
}
