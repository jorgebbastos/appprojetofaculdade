import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StyledComponentPage from './StyledComponentPage';
import TailwindPage from './TailwindPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/styled" element={<StyledComponentPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
      </Routes>
    </Router>
  );
}

export default App;
