import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import type { FieldConfig } from "@/types/FieldConfig";

interface Props {
  field: FieldConfig;
}

export const DynamicField: React.FC<Props> = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[field.name];

  const renderInput = (field: FieldConfig) => {
    switch (field.type) {
      case "text":
      case "email":
      case "phone":
      case "number":
      case "date":
        return (
          <Input
            id={String(field.name)}
            type={field.type}
            {...register(String(field.name))}
          />
        );

      case "upload":
        return (
          <input
            id={String(field.name)}
            type="file"
            accept="image/*,application/pdf"
            {...register(String(field.name))}
          />
        );

      default:
        return (
          <Text color="red.500">Tipo de campo no soportado: {field.type}</Text>
        );
    }
  };

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
      <InputGroup>{renderInput(field)}</InputGroup>
      <FormErrorMessage>{error?.message as string}</FormErrorMessage>
    </FormControl>
  );
};
