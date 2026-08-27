import React from 'react';
import { ArrowRight } from 'lucide-react';

const SectionTransition = ({ section, heading, description, onContinue }) => {
  const transitionMessages = {
    selfEfficacy: {
      heading: 'Let\'s Explore Your Strengths',
      description: 'These first questions look at how confident you feel about handling challenges and solving problems.'
    },
    metacognition: {
      heading: 'Let\'s Explore How You Think',
      description: 'These questions look at how you relate to your thoughts, worry, memory, and mental control.'
    },
    anxiety: {
      heading: 'Let\'s Check In On Your Wellbeing',
      description: 'The next questions explore your recent experiences with worry, nervousness, and relaxation.'
    },
    cognitiveLoad: {
      heading: 'Let\'s Look at Mental Effort',
      description: 'The next questions explore how mentally demanding some recent tasks may have felt.'
    },
    mentalFatigue: {
      heading: 'Let\'s Explore Your Mental Energy',
      description: 'These questions look at recent experiences of energy, concentration, motivation, and tiredness.'
    },
    rumination: {
      heading: 'Let\'s Explore Your Thought Patterns',
      description: 'These questions explore how thoughts may return to your attention and how you make sense of experiences.'
    }
  };

  const message = transitionMessages[section] || { heading, description };

  return (
    <div className="min-h-screen gradient-subtle py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="bg-white rounded-2xl card-shadow p-8 sm:p-12 text-center">
          <div className="mb-6">
            <div className="inline-block p-3 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            {message.heading}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {message.description}
          </p>
          <button
            onClick={onContinue}
            className="inline-flex items-center gap-3 px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-smooth button-glow"
          >
            <span>Continue</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTransition;
