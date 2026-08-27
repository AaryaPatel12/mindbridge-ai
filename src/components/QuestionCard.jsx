import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { useAssessment } from '../hooks/useAssessment';

const QuestionCard = ({ question, questions, onAnswer, onNext, onBack, isAnswered }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { responses } = useAssessment();
  const currentIndex = questions.findIndex(q => q.id === question.id);
  const percent = Math.round(((currentIndex + 1) / questions.length) * 100);

  useEffect(() => {
    if (responses[question.id] !== undefined) {
      setSelectedAnswer(responses[question.id]);
    }
  }, [question.id, responses]);

  const handleSelectAnswer = (value) => {
    setSelectedAnswer(value);
    onAnswer(value);
  };

  // Map parameter names to display names
  const parameterDisplayNames = {
    selfEfficacy: 'Self-Efficacy',
    metacognition: 'Metacognition',
    anxiety: 'Anxiety / Worry',
    cognitiveLoad: 'Cognitive Load',
    mentalFatigue: 'Mental Fatigue',
    rumination: 'Rumination'
  };

  const subscaleDisplayNames = {
    positiveBeliefsAboutWorry: 'Positive Beliefs About Worry',
    negativeBeliefsAboutWorry: 'Negative Beliefs About Worry',
    cognitiveConfidence: 'Cognitive Confidence',
    needForControl: 'Need for Control',
    cognitiveSelfConsciousness: 'Cognitive Self-Consciousness',
    mentalLoad: 'Mental Load',
    mentalEffort: 'Mental Effort',
    generalFatigue: 'General Fatigue',
    physicalFatigue: 'Physical Fatigue',
    reducedActivity: 'Reduced Activity',
    reducedMotivation: 'Reduced Motivation',
    mentalFatigue: 'Mental Fatigue',
    intrusiveRumination: 'Intrusive Rumination',
    deliberateRumination: 'Deliberate Rumination'
  };

  return (
    <div className="min-h-screen gradient-subtle py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">
            MindBridge Assessment
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
                {parameterDisplayNames[question.parameter]}
              </h2>
              {question.subscale && (
                <p className="text-sm text-gray-600 mt-1">
                  {subscaleDisplayNames[question.subscale]}
                </p>
              )}
            </div>
          </div>
          <ProgressBar current={currentIndex + 1} total={questions.length} percent={percent} />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl card-shadow p-6 sm:p-8 mb-8 animate-fade-in">
          {/* Question Text */}
          <div className="mb-8">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-relaxed">
              {question.text}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.scaleLabels.map((label, index) => {
              const value = question.minScore + index;
              const isSelected = selectedAnswer === value;

              return (
                <button
                  key={value}
                  onClick={() => handleSelectAnswer(value)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-primary-600 bg-primary-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50'
                  }`}
                >
                  <span className={`font-medium text-lg ${
                    isSelected ? 'text-primary-900' : 'text-gray-700'
                  }`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={onBack}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-primary-600 hover:text-primary-600 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <button
            onClick={onNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-white font-semibold hover:shadow-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed button-glow"
          >
            <span className="hidden sm:inline">{currentIndex === questions.length - 1 ? 'Complete' : 'Next'}</span>
            <span className="sm:hidden">{currentIndex === questions.length - 1 ? 'Done' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
