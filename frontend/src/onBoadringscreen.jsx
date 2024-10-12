import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import the icons
import homeImage from "./assets/simon.png";

const onboardingData = [
  {
    title: "Get paid for what you love",
    description: "Lorem ipsum dolor sit amet consectetur. Sit nibh amet sit sit eget sceleris",
    img: "https://thumbs.dreamstime.com/b/businessman-counts-money-pop-art-avatar-character-icon-round-retro-vector-illustration-98244852.jpg"
  },
  {
    title: "Find your dream job Here",
    description: "Explore thousands of job opportunities with all the information you need.",
    img: "https://st2.depositphotos.com/2954247/9283/v/950/depositphotos_92835568-stock-illustration-avatar-icon-set.jpg"
  },
  {
    title: "Grow your network with Us",
    description: "Connect with professionals and expand your career opportunities.",
    img: "https://thumbs.dreamstime.com/b/social-media-network-connection-concept-avatar-people-flat-design-globe-51681292.jpg"
  },
  {
    title: "Start your journey with Us",
    description: "Your new career path begins here. Let's get started!",
    img: "https://img.freepik.com/free-vector/journey-concept-illustration_114360-27770.jpg"
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
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white mt-5 max-w-md mx-auto flex flex-col p-4 sm:p-6 relative">
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 text-white text-sm"
      >
        Skip
      </button>

      {/* Image */}
      <div className="w-full flex justify-center mb-4 sm:mb-8">
        <img src={onboardingData[currentIndex].img} alt="Onboarding step" className="w-40 h-60 mt-10 sm:w-60 h-auto rounded-full" />
      </div>

      {/* Onboarding Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative">

        {/* Left Icon */}
        {currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>
        )}

        <div 
          {...handlers}
          className="w-full max-w-sm bg-[#2C2C35] mt-20 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 overflow-hidden"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4">
            {onboardingData[currentIndex].title}
          </h1>
          <p className="text-center text-gray-400 mb-4 sm:mb-6 p-3">
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

        {/* Right Icon */}
        {currentIndex < onboardingData.length - 1 && (
          <button
            onClick={() => setCurrentIndex(prev => Math.min(prev + 1, onboardingData.length - 1))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      <button
        onClick={handleGetStarted}
        className="w-full bg-purple-600 text-white py-3 sm:py-4 rounded-lg text-lg font-semibold"
      >
        Get Started
      </button>
    </div>
  );
}
