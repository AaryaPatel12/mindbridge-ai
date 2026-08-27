import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Disclaimer from '../components/Disclaimer';

const Onboarding = ({ onBegin }) => {
  const onboardingItems = [
    'There are no right or wrong answers.',
    'Answer based on your genuine experience.',
    'Your responses are used to create a personal self-awareness snapshot.',
    'Individual experiences naturally vary.',
    'Your results are not a medical or psychological diagnosis.'
  ];

  return (
    <div className="min-h-screen gradient-subtle py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="bg-white rounded-2xl card-shadow p-8 sm:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Before We Begin</h1>
            <p className="text-xl text-gray-600">This assessment takes less than 10 minutes.</p>
          </div>

          {/* Onboarding Items */}
          <div className="space-y-4 mb-8">
            {onboardingItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mb-8">
            <Disclaimer />
          </div>

          {/* Button */}
          <button
            onClick={onBegin}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-smooth button-glow text-lg"
          >
            <span>Begin Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
