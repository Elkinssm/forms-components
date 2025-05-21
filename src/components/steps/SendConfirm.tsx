import { Button, Text, VStack } from "@chakra-ui/react";
import { useFormWizard } from "@/hooks/useFormWizard";

const SendConfirm = () => {
  const { formData } = useFormWizard();

  return (
    <VStack align="start" spacing={4}>
      <Text fontWeight="bold">Review your data before submitting:</Text>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <Button colorScheme="green" onClick={() => alert("Submitted!")}>
        Confirm and Submit
      </Button>
    </VStack>
  );
};

export default SendConfirm;
