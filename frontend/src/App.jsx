import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingScreen from './onBoadringscreen';
import JobSearchScreen from './JobSearchScreen';
import OnboardingScreen2 from './onBoard2';
import AllJobs from './AllJobs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingScreen />} />
        <Route path="/onboard2" element={<OnboardingScreen2/>} />
        <Route path="/job-search" element={<JobSearchScreen />} />
        <Route path='/all-jobs' element={<AllJobs/>}/>
      </Routes>
    </Router>
  );
}

export default App;