import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Fallback from "./components/Fallback";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary fallback={<Fallback />}>
          <AppRoutes />
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
};

export default App;