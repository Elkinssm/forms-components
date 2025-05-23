import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useFormContext } from "react-hook-form";
import type { FieldConfig } from "@/types/FieldConfig";

type Props = {
  fields: FieldConfig[];
};

export const GenericFieldRenderer = ({ fields }: Props) => {
  const { register, formState } = useFormContext();

  const renderInput = (field: FieldConfig) => {
    const name = field.name;

    switch (field.type) {
      case "upload":
        return (
          <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ borderColor: "gray.300" }}
            _focusWithin={{ borderColor: "blue.500", boxShadow: "outline" }}
          >
            <input
              id={String(name)}
              type="file"
              style={{ width: "100%" }}
              {...register(String(name))}
            />
          </Box>
        );

      case "date":
        return (
          <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ borderColor: "gray.300" }}
            _focusWithin={{ borderColor: "blue.500", boxShadow: "outline" }}
          >
            <input
              id={String(name)}
              type="date"
              style={{ width: "100%" }}
              {...register(String(name))}
            />
          </Box>
        );

      case "number":
      case "email":
      case "phone":
      case "text":
      default:
        return (
          <Input
            id={String(name)}
            type={field.type}
            {...register(String(name))}
          />
        );
    }
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {fields.map((field) => {
        const { name, label, columns = 2, processors } = field;

        const helpText =
          field.help ??
          processors?.slice().sort((a, b) => {
            const aPriority = a.help_priority ?? 0;
            const bPriority = b.help_priority ?? 0;
            return aPriority - bPriority;
          })[0]?.help;

        return (
          <GridItem key={String(name)} colSpan={columns === 1 ? 2 : 1}>
            <FormControl isInvalid={!!formState.errors[name]}>
              <FormLabel htmlFor={String(name)}>
                <HStack spacing={1} align="center">
                  <Box as="span">{label}</Box>
                  {helpText && (
                    <Tooltip label={helpText} hasArrow fontSize="sm">
                      <span>
                        <InfoIcon color="gray.500" boxSize={3} />
                      </span>
                    </Tooltip>
                  )}
                </HStack>
              </FormLabel>

              {renderInput(field)}

              <FormErrorMessage>
                {formState.errors[name]?.message as string}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};
