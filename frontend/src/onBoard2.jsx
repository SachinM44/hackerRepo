import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnboardingScreen() {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/job-search');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[488px] h-[732px] bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-between p-6 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="w-52 h-52 mb-8">
        /
          </div>
          
          <h1 className="text-2xl font-bold text-white text-center mb-3">
            Ready? Let's Get Started!!
          </h1>
          
          <p className="text-sm text-gray-400 text-center mb-6 max-w-xs">
            Lorem ipsum dolor sit amet consectetur. Sit nibh amet sit sit eget sceleris
          </p>
          
          <div className="flex space-x-2 mb-8">
            {[0, 1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="w-full space-y-4 mb-4">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Connect Your Wallet
          </button>
          <button
            onClick={handleSkip}
            className="w-full py-3 bg-[#9900FF] text-white rounded-lg font-semibold hover:bg-[#8400D6] transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}