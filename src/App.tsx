import { FormWizardProvider } from "@/context/FormWizardContext";
import { SidebarShell } from "@/components/layout/SidebarShell";

const App = () => (
  <FormWizardProvider>
    <SidebarShell />
  </FormWizardProvider>
);

export default App;
