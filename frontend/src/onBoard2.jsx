import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnboardingScreen2() {
  const navigate = useNavigate();
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
        <div className="w-full max-w-sm bg-[#2C2C35] rounded-lg p-6 mb-8 overflow-hidden">
          <h1 className="text-3xl font-bold text-center mb-4">
            Ready? Let's Get Started!!
          </h1>
          <p className="text-center text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur. Sit nibh amet sit sit eget sceleris
          </p>
          <div className="flex justify-center space-x-2">
            {[0, 1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full space-y-4 mb-4">
        <button className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold">
          Connect Your Wallet
        </button>
        <button
          onClick={handleSkip}
          className="w-full py-4 bg-[#9900FF] text-white rounded-lg text-lg font-semibold"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
