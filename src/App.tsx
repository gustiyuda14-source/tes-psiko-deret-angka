import { TestProvider, useTest } from './context/TestContext';
import { StartPage } from './pages/StartPage';
import { TestPage } from './pages/TestPage';
import { ResultsPage } from './components/ResultsPage';
import './index.css';

function AppContent() {
  const { testStarted, testSubmitted } = useTest();

  if (!testStarted) {
    return <StartPage />;
  }

  if (testSubmitted) {
    return <ResultsPage />;
  }

  return <TestPage />;
}

function App() {
  return (
    <TestProvider>
      <AppContent />
    </TestProvider>
  );
}

export default App;
