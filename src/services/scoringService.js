// Scoring service for Project AURA assessment
// Handles all score calculations including reverse-scored items

export const scoringService = {
  // Helper function to apply reverse scoring
  reverseScore: (score, minScore, maxScore) => {
    return minScore + maxScore - score;
  },

  // Calculate Self-Efficacy Score (10 questions, scale 1-4)
  calculateSelfEfficacy: (responses, questions) => {
    const selfEfficacyQuestions = questions.filter(q => q.parameter === 'selfEfficacy');
    let total = 0;

    selfEfficacyQuestions.forEach(q => {
      const response = responses[q.id];
      if (response !== undefined) {
        total += response;
      }
    });

    return {
      parameter: 'selfEfficacy',
      score: total,
      maxScore: 40,
      minScore: 10,
      normalizedScore: Math.round((total / 40) * 100)
    };
  },

  // Calculate Metacognition and Subscales (30 questions, scale 1-4)
  calculateMetacognition: (responses, questions) => {
    const metacognitionQuestions = questions.filter(q => q.parameter === 'metacognition');
    const subscales = {};
    let totalScore = 0;

    // Define subscale names
    const subscaleNames = [
      'positiveBeliefsAboutWorry',
      'negativeBeliefsAboutWorry',
      'cognitiveConfidence',
      'needForControl',
      'cognitiveSelfConsciousness'
    ];

    subscaleNames.forEach(subscale => {
      const subscaleQuestions = metacognitionQuestions.filter(q => q.subscale === subscale);
      let subscaleTotal = 0;

      subscaleQuestions.forEach(q => {
        const response = responses[q.id];
        if (response !== undefined) {
          if (q.reverseScored) {
            subscaleTotal += scoringService.reverseScore(response, q.minScore, q.maxScore);
          } else {
            subscaleTotal += response;
          }
        }
      });

      subscales[subscale] = {
        score: subscaleTotal,
        maxScore: subscaleQuestions.length * 4,
        minScore: subscaleQuestions.length,
        normalizedScore: Math.round((subscaleTotal / (subscaleQuestions.length * 4)) * 100)
      };

      totalScore += subscaleTotal;
    });

    return {
      parameter: 'metacognition',
      score: totalScore,
      maxScore: 120,
      minScore: 30,
      normalizedScore: Math.round((totalScore / 120) * 100),
      subscales
    };
  },

  // Calculate Anxiety Score (7 questions, scale 1-5)
  calculateAnxiety: (responses, questions) => {
    const anxietyQuestions = questions.filter(q => q.parameter === 'anxiety');
    let total = 0;

    anxietyQuestions.forEach(q => {
      const response = responses[q.id];
      if (response !== undefined) {
        total += response;
      }
    });

    return {
      parameter: 'anxiety',
      score: total,
      maxScore: 35,
      minScore: 7,
      normalizedScore: Math.round((total / 35) * 100)
    };
  },

  // Calculate Cognitive Load and Subscales (6 questions, scale 1-5)
  calculateCognitiveLoad: (responses, questions) => {
    const cognitiveLoadQuestions = questions.filter(q => q.parameter === 'cognitiveLoad');
    const subscales = {};
    let totalScore = 0;

    ['mentalLoad', 'mentalEffort'].forEach(subscale => {
      const subscaleQuestions = cognitiveLoadQuestions.filter(q => q.subscale === subscale);
      let subscaleTotal = 0;

      subscaleQuestions.forEach(q => {
        const response = responses[q.id];
        if (response !== undefined) {
          if (q.reverseScored) {
            subscaleTotal += scoringService.reverseScore(response, q.minScore, q.maxScore);
          } else {
            subscaleTotal += response;
          }
        }
      });

      subscales[subscale] = {
        score: subscaleTotal,
        maxScore: subscaleQuestions.length * 5,
        minScore: subscaleQuestions.length,
        normalizedScore: Math.round((subscaleTotal / (subscaleQuestions.length * 5)) * 100)
      };

      totalScore += subscaleTotal;
    });

    return {
      parameter: 'cognitiveLoad',
      score: totalScore,
      maxScore: 30,
      minScore: 6,
      normalizedScore: Math.round((totalScore / 30) * 100),
      subscales
    };
  },

  // Calculate Mental Fatigue and Subscales (20 questions, scale 1-5)
  calculateMentalFatigue: (responses, questions) => {
    const mentalFatigueQuestions = questions.filter(q => q.parameter === 'mentalFatigue');
    const subscales = {};
    let totalScore = 0;

    const subscaleNames = [
      'generalFatigue',
      'physicalFatigue',
      'reducedActivity',
      'reducedMotivation',
      'mentalFatigue'
    ];

    subscaleNames.forEach(subscale => {
      const subscaleQuestions = mentalFatigueQuestions.filter(q => q.subscale === subscale);
      let subscaleTotal = 0;

      subscaleQuestions.forEach(q => {
        const response = responses[q.id];
        if (response !== undefined) {
          if (q.reverseScored) {
            subscaleTotal += scoringService.reverseScore(response, q.minScore, q.maxScore);
          } else {
            subscaleTotal += response;
          }
        }
      });

      subscales[subscale] = {
        score: subscaleTotal,
        maxScore: subscaleQuestions.length * 5,
        minScore: subscaleQuestions.length,
        normalizedScore: Math.round((subscaleTotal / (subscaleQuestions.length * 5)) * 100)
      };

      totalScore += subscaleTotal;
    });

    return {
      parameter: 'mentalFatigue',
      score: totalScore,
      maxScore: 100,
      minScore: 20,
      normalizedScore: Math.round((totalScore / 100) * 100),
      subscales
    };
  },

  // Calculate Rumination and Subscales (12 questions, scale 1-5)
  calculateRumination: (responses, questions) => {
    const ruminationQuestions = questions.filter(q => q.parameter === 'rumination');
    const subscales = {};
    let totalScore = 0;

    ['intrusiveRumination', 'deliberateRumination'].forEach(subscale => {
      const subscaleQuestions = ruminationQuestions.filter(q => q.subscale === subscale);
      let subscaleTotal = 0;

      subscaleQuestions.forEach(q => {
        const response = responses[q.id];
        if (response !== undefined) {
          if (q.reverseScored) {
            subscaleTotal += scoringService.reverseScore(response, q.minScore, q.maxScore);
          } else {
            subscaleTotal += response;
          }
        }
      });

      subscales[subscale] = {
        score: subscaleTotal,
        maxScore: subscaleQuestions.length * 5,
        minScore: subscaleQuestions.length,
        normalizedScore: Math.round((subscaleTotal / (subscaleQuestions.length * 5)) * 100)
      };

      totalScore += subscaleTotal;
    });

    return {
      parameter: 'rumination',
      score: totalScore,
      maxScore: 60,
      minScore: 12,
      normalizedScore: Math.round((totalScore / 60) * 100),
      subscales
    };
  },

  // Calculate all scores
  calculateAllScores: (responses, questions) => {
    const allScores = {
      selfEfficacy: scoringService.calculateSelfEfficacy(responses, questions),
      metacognition: scoringService.calculateMetacognition(responses, questions),
      anxiety: scoringService.calculateAnxiety(responses, questions),
      cognitiveLoad: scoringService.calculateCognitiveLoad(responses, questions),
      mentalFatigue: scoringService.calculateMentalFatigue(responses, questions),
      rumination: scoringService.calculateRumination(responses, questions)
    };

    return allScores;
  }
};

export default scoringService;
