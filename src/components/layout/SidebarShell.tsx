import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { useFormWizard } from "@/hooks/useFormWizard";

export const SidebarShell = () => {
  const { steps, selectedPage, goToPage } = useFormWizard();
  const Step = steps[selectedPage].component;

  return (
    <Box display="flex" h="100vh">
      <Box w="300px" bg="gray.100" p={4}>
        <Text fontWeight="bold" mb={4}>
          Steps
        </Text>
        <List spacing={2}>
          {steps.map((step, idx) => (
            <ListItem
              key={step.title}
              fontWeight={idx === selectedPage ? "bold" : "normal"}
              cursor="pointer"
              onClick={() => goToPage(idx)}
            >
              {step.title}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box flex="1" p={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          {steps[selectedPage].title}
        </Text>
        <Text mb={4}>{steps[selectedPage].description}</Text>
        <Step />
      </Box>
    </Box>
  );
};
