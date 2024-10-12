import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingScreen from './onBoadringscreen';
import JobSearchScreen from './JobSearchScreen';
import OnboardingScreen2 from './onBoard2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboard" element={<OnboardingScreen />} />
        <Route path="/onboard2" element={<OnboardingScreen2/>} />
        <Route path="/job-search" element={<JobSearchScreen />} />
      </Routes>
    </Router>
  );
}

export default App;