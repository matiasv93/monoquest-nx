import { Routes } from 'react-router';

import { AppRoutes } from './routes';
import { BreadcrumbProvider } from './contexts/BreadcrumbContext';

export function App() {
  return (
    <BreadcrumbProvider>
      <Routes>{AppRoutes}</Routes>
    </BreadcrumbProvider>
  );
}

export default App;
