import { AlertContext, useAlertService } from './services/alertService';
import ComponentLibrary from './pages/ComponentLibrary';

function App() {
  const alertService = useAlertService();

  return (
    <AlertContext.Provider value={alertService}>
      <ComponentLibrary />
    </AlertContext.Provider>
  );
}

export default App;
