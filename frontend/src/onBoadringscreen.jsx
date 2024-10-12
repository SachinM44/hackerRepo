import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const onboardingData = [
  {
    title: "Get paid for what you love",
    description: "Lorem ipsum dolor sit amet consectetur. Sit nibh amet sit sit eget sceleris"
  },
  {
    title: "Find your dream job",
    description: "Explore thousands of job opportunities with all the information you need."
  },
  {
    title: "Grow your network",
    description: "Connect with professionals and expand your career opportunities."
  },
  {
    title: "Start your journey",
    description: "Your new career path begins here. Let's get started!"
  }
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(prev => Math.min(prev + 1, onboardingData.length - 1)),
    onSwipedRight: () => setCurrentIndex(prev => Math.max(prev - 1, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleGetStarted = () => {
    navigate('/onboard2');
  };

  const handleSkip = () => {
    navigate('/job-search');
  };

  return (
    <div className="bg-[#1C1C23] text-white h-screen max-w-md mx-auto flex flex-col p-6 relative">
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 text-white text-sm"
      >
        Skip
      </button>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div 
          {...handlers}
          className="w-full max-w-sm bg-[#2C2C35] rounded-lg p-6 mb-8 overflow-hidden"
        >
          <h1 className="text-3xl font-bold text-center mb-4">
            {onboardingData[currentIndex].title}
          </h1>
          <p className="text-center text-gray-400 mb-6">
            {onboardingData[currentIndex].description}
          </p>
          <div className="flex justify-center space-x-2">
            {onboardingData.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-600'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleGetStarted}
        className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold"
      >
        Get Started
      </button>
    </div>
  );
}