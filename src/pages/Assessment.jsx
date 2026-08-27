import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import SectionTransition from '../components/SectionTransition';
import { allQuestions } from '../data/questions';
import { useAssessment } from '../hooks/useAssessment';

const Assessment = ({ onComplete }) => {
  const { responses, setResponses, currentQuestionIndex, setCurrentQuestionIndex } = useAssessment();
  const [showTransition, setShowTransition] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Define sections and their starting questions
  const sections = [
    { name: 'selfEfficacy', startIndex: 0, endIndex: 9 },
    { name: 'metacognition', startIndex: 10, endIndex: 39 },
    { name: 'anxiety', startIndex: 40, endIndex: 46 },
    { name: 'cognitiveLoad', startIndex: 47, endIndex: 52 },
    { name: 'mentalFatigue', startIndex: 53, endIndex: 72 },
    { name: 'rumination', startIndex: 73, endIndex: 84 }
  ];

  // Check if we need to show a section transition
  useEffect(() => {
    const currentSection = sections.find(
      s => currentQuestionIndex >= s.startIndex && currentQuestionIndex <= s.endIndex
    );

    if (currentSection && currentQuestionIndex === currentSection.startIndex && currentQuestionIndex > 0) {
      setCurrentSection(currentSection.name);
      setShowTransition(true);
    } else if (currentQuestionIndex === 0) {
      setShowTransition(false);
    }
  }, [currentQuestionIndex]);

  const currentQuestion = allQuestions[currentQuestionIndex];
  const isAnswered = responses[currentQuestion.id] !== undefined;
  const isLastQuestion = currentQuestionIndex === allQuestions.length - 1;

  const handleAnswer = (value) => {
    setResponses(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowAnalysis(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      // Check if next question is start of new section
      const nextSection = sections.find(
        s => currentQuestionIndex + 1 >= s.startIndex && currentQuestionIndex + 1 <= s.endIndex
      );
      if (nextSection && currentQuestionIndex + 1 === nextSection.startIndex && currentQuestionIndex > 0) {
        setCurrentSection(nextSection.name);
        setShowTransition(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowTransition(false);
    }
  };

  const handleContinueTransition = () => {
    setShowTransition(false);
  };

  if (showAnalysis) {
    return (
      <div className="min-h-screen gradient-subtle py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          <div className="bg-white rounded-2xl card-shadow p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your responses are complete.</h2>
            <p className="text-xl text-gray-600 mb-8">Creating your AURA Reflection...</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>Organizing responses</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>Calculating response patterns</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>Reviewing parameter scores</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>Preparing your reflection</span>
              </div>
            </div>
            <button
              onClick={onComplete}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-smooth button-glow"
            >
              View Your Results
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showTransition && currentSection) {
    return <SectionTransition section={currentSection} onContinue={handleContinueTransition} />;
  }

  return (
    <QuestionCard
      question={currentQuestion}
      questions={allQuestions}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onBack={handleBack}
      isAnswered={isAnswered}
    />
  );
};

export default Assessment;
