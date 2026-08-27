import React, { useState, useContext, createContext } from 'react';

const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessmentId] = useState(`AURA-${Math.random().toString(36).substr(2, 5).toUpperCase()}`);
  const [scores, setScores] = useState(null);

  const value = {
    responses,
    setResponses,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    assessmentId,
    scores,
    setScores
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within AssessmentProvider');
  }
  return context;
};
