// Complete Project AURA Questionnaire with 85 questions
// Organized by parameter and subscale

export const allQuestions = [
  // SELF-EFFICACY (10 questions, scale 1-4)
  {
    id: 'se_01',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'I can always manage to solve difficult problems if I try hard enough.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_02',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'If someone opposes me, I can find the means and ways to get what I want.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_03',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'It is easy for me to stick to my aims and accomplish my goals.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_04',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'I am confident that I could deal efficiently with unexpected events.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_05',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'Thanks to my resourcefulness, I know how to handle unforeseen situations.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_06',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'I can solve most problems if I invest the necessary effort.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_07',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'I can remain calm when facing difficulties because I can rely on my coping abilities.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_08',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'When I am confronted with a problem, I can usually find several solutions.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_09',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'If I am in trouble, I can usually think of a solution.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },
  {
    id: 'se_10',
    parameter: 'selfEfficacy',
    subscale: null,
    section: 'positive',
    text: 'I can usually handle whatever comes my way.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Not at all true', 'Hardly true', 'Moderately true', 'Exactly true'],
    reverseScored: false
  },

  // METACOGNITION (30 questions, scale 1-4)
  // Subscale 1: Positive Beliefs About Worry (6 questions)
  {
    id: 'mc_01',
    parameter: 'metacognition',
    subscale: 'positiveBeliefsAboutWorry',
    section: 'positive',
    text: 'Worrying helps me to avoid problems.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_02',
    parameter: 'metacognition',
    subscale: 'positiveBeliefsAboutWorry',
    section: 'positive',
    text: 'Worrying helps me to cope.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_03',
    parameter: 'metacognition',
    subscale: 'positiveBeliefsAboutWorry',
    section: 'positive',
    text: 'Worrying helps me to solve problems.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_04',
    parameter: 'metacognition',
    subscale: 'positiveBeliefsAboutWorry',
    section: 'positive',
    text: 'I need to worry in order to remain organized.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_05',
    parameter: 'metacognition',
    subscale: 'positiveBeliefsAboutWorry',
    section: 'positive',
    text: 'Worrying is necessary for me to be prepared.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_06',
    parameter: 'metacognition',
    subscale: 'positiveBeliefsAboutWorry',
    section: 'positive',
    text: 'I must worry in order to get things done.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },

  // Subscale 2: Negative Beliefs About Worry (6 questions)
  {
    id: 'mc_07',
    parameter: 'metacognition',
    subscale: 'negativeBeliefsAboutWorry',
    section: 'positive',
    text: 'My worrying could make me go mad.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_08',
    parameter: 'metacognition',
    subscale: 'negativeBeliefsAboutWorry',
    section: 'positive',
    text: 'My worrying is dangerous for me.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_09',
    parameter: 'metacognition',
    subscale: 'negativeBeliefsAboutWorry',
    section: 'positive',
    text: 'I could make myself sick with worrying.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_10',
    parameter: 'metacognition',
    subscale: 'negativeBeliefsAboutWorry',
    section: 'positive',
    text: 'My worrying thoughts are uncontrollable.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_11',
    parameter: 'metacognition',
    subscale: 'negativeBeliefsAboutWorry',
    section: 'positive',
    text: 'I will lose control if I keep worrying.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_12',
    parameter: 'metacognition',
    subscale: 'negativeBeliefsAboutWorry',
    section: 'positive',
    text: 'I cannot stop worrying once I start.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },

  // Subscale 3: Cognitive Confidence (6 questions)
  {
    id: 'mc_13',
    parameter: 'metacognition',
    subscale: 'cognitiveConfidence',
    section: 'positive',
    text: 'I have little confidence in my memory.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: true
  },
  {
    id: 'mc_14',
    parameter: 'metacognition',
    subscale: 'cognitiveConfidence',
    section: 'positive',
    text: 'I have a poor memory.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: true
  },
  {
    id: 'mc_15',
    parameter: 'metacognition',
    subscale: 'cognitiveConfidence',
    section: 'positive',
    text: 'I am not confident in my ability to remember things.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: true
  },
  {
    id: 'mc_16',
    parameter: 'metacognition',
    subscale: 'cognitiveConfidence',
    section: 'positive',
    text: 'My memory can mislead me at times.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: true
  },
  {
    id: 'mc_17',
    parameter: 'metacognition',
    subscale: 'cognitiveConfidence',
    section: 'positive',
    text: 'I doubt my memory.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: true
  },
  {
    id: 'mc_18',
    parameter: 'metacognition',
    subscale: 'cognitiveConfidence',
    section: 'positive',
    text: 'I do not trust my memory.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: true
  },

  // Subscale 4: Need for Control (6 questions)
  {
    id: 'mc_19',
    parameter: 'metacognition',
    subscale: 'needForControl',
    section: 'positive',
    text: 'If I do not control my thoughts, I will not be able to function.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_20',
    parameter: 'metacognition',
    subscale: 'needForControl',
    section: 'positive',
    text: 'I must be in control of my thoughts at all times.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_21',
    parameter: 'metacognition',
    subscale: 'needForControl',
    section: 'positive',
    text: 'I need to be in control of my thoughts.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_22',
    parameter: 'metacognition',
    subscale: 'needForControl',
    section: 'positive',
    text: 'Not being able to control my thoughts is a sign of weakness.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_23',
    parameter: 'metacognition',
    subscale: 'needForControl',
    section: 'positive',
    text: 'If I lose control of my thoughts, I will not be able to cope.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_24',
    parameter: 'metacognition',
    subscale: 'needForControl',
    section: 'positive',
    text: 'I should be in control of my thoughts.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },

  // Subscale 5: Cognitive Self-Consciousness (6 questions)
  {
    id: 'mc_25',
    parameter: 'metacognition',
    subscale: 'cognitiveSelfConsciousness',
    section: 'positive',
    text: 'I pay close attention to how my mind works.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_26',
    parameter: 'metacognition',
    subscale: 'cognitiveSelfConsciousness',
    section: 'positive',
    text: 'I think a lot about my thoughts.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_27',
    parameter: 'metacognition',
    subscale: 'cognitiveSelfConsciousness',
    section: 'positive',
    text: 'I monitor my thoughts.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_28',
    parameter: 'metacognition',
    subscale: 'cognitiveSelfConsciousness',
    section: 'positive',
    text: 'I am constantly aware of my thinking.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_29',
    parameter: 'metacognition',
    subscale: 'cognitiveSelfConsciousness',
    section: 'positive',
    text: 'I notice how my mind operates.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },
  {
    id: 'mc_30',
    parameter: 'metacognition',
    subscale: 'cognitiveSelfConsciousness',
    section: 'positive',
    text: 'I am aware of the way my mind works.',
    minScore: 1,
    maxScore: 4,
    scaleLabels: ['Do not agree', 'Agree slightly', 'Agree moderately', 'Agree very much'],
    reverseScored: false
  },

  // ANXIETY (7 questions, scale 1-5)
  {
    id: 'anx_01',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Feeling nervous, anxious, or on edge.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'anx_02',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Not being able to stop or control worrying.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'anx_03',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Worrying too much about different things.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'anx_04',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Trouble relaxing.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'anx_05',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Being so restless that it is hard to sit still.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'anx_06',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Becoming easily annoyed or irritable.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'anx_07',
    parameter: 'anxiety',
    subscale: null,
    section: 'negative',
    text: 'Feeling afraid as if something awful might happen.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // COGNITIVE LOAD (6 questions, scale 1-5)
  // Mental Load (3 questions - third is reverse scored)
  {
    id: 'cl_01',
    parameter: 'cognitiveLoad',
    subscale: 'mentalLoad',
    section: 'negative',
    text: 'Working on this activity required effort.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'cl_02',
    parameter: 'cognitiveLoad',
    subscale: 'mentalLoad',
    section: 'negative',
    text: 'Working on this activity was mentally demanding.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'cl_03',
    parameter: 'cognitiveLoad',
    subscale: 'mentalLoad',
    section: 'negative',
    text: 'Working on this activity was effortless.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: true
  },

  // Mental Effort (3 questions)
  {
    id: 'cl_04',
    parameter: 'cognitiveLoad',
    subscale: 'mentalEffort',
    section: 'negative',
    text: 'I invested effort while working on this activity.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'cl_05',
    parameter: 'cognitiveLoad',
    subscale: 'mentalEffort',
    section: 'negative',
    text: 'I worked hard on this activity.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'cl_06',
    parameter: 'cognitiveLoad',
    subscale: 'mentalEffort',
    section: 'negative',
    text: 'I put my heart and soul into working on this activity.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // MENTAL FATIGUE (20 questions, scale 1-5)
  // General Fatigue (4 questions)
  {
    id: 'mf_01',
    parameter: 'mentalFatigue',
    subscale: 'generalFatigue',
    section: 'negative',
    text: 'I feel tired.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_02',
    parameter: 'mentalFatigue',
    subscale: 'generalFatigue',
    section: 'negative',
    text: 'I feel fatigued.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_03',
    parameter: 'mentalFatigue',
    subscale: 'generalFatigue',
    section: 'negative',
    text: 'I am exhausted.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_04',
    parameter: 'mentalFatigue',
    subscale: 'generalFatigue',
    section: 'negative',
    text: 'I am running out of energy.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // Physical Fatigue (4 questions)
  {
    id: 'mf_05',
    parameter: 'mentalFatigue',
    subscale: 'physicalFatigue',
    section: 'negative',
    text: 'My body feels heavy.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_06',
    parameter: 'mentalFatigue',
    subscale: 'physicalFatigue',
    section: 'negative',
    text: 'My limbs feel heavy.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_07',
    parameter: 'mentalFatigue',
    subscale: 'physicalFatigue',
    section: 'negative',
    text: 'I am physically tired.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_08',
    parameter: 'mentalFatigue',
    subscale: 'physicalFatigue',
    section: 'negative',
    text: 'It takes a lot of effort to move.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // Reduced Activity (4 questions)
  {
    id: 'mf_09',
    parameter: 'mentalFatigue',
    subscale: 'reducedActivity',
    section: 'negative',
    text: 'I accomplish less than I used to.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_10',
    parameter: 'mentalFatigue',
    subscale: 'reducedActivity',
    section: 'negative',
    text: 'I get very little done.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_11',
    parameter: 'mentalFatigue',
    subscale: 'reducedActivity',
    section: 'negative',
    text: 'I do not do any of the things I used to do.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_12',
    parameter: 'mentalFatigue',
    subscale: 'reducedActivity',
    section: 'negative',
    text: 'I have difficulty performing my usual activities.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // Reduced Motivation (4 questions)
  {
    id: 'mf_13',
    parameter: 'mentalFatigue',
    subscale: 'reducedMotivation',
    section: 'negative',
    text: 'I have no desire to do anything.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_14',
    parameter: 'mentalFatigue',
    subscale: 'reducedMotivation',
    section: 'negative',
    text: 'It is an effort to start anything.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_15',
    parameter: 'mentalFatigue',
    subscale: 'reducedMotivation',
    section: 'negative',
    text: 'I cannot be bothered to do anything.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_16',
    parameter: 'mentalFatigue',
    subscale: 'reducedMotivation',
    section: 'negative',
    text: 'I am less interested in the things I normally enjoy.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // Mental Fatigue (4 questions)
  {
    id: 'mf_17',
    parameter: 'mentalFatigue',
    subscale: 'mentalFatigue',
    section: 'negative',
    text: 'My thinking is muddled.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_18',
    parameter: 'mentalFatigue',
    subscale: 'mentalFatigue',
    section: 'negative',
    text: 'I have difficulty concentrating.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_19',
    parameter: 'mentalFatigue',
    subscale: 'mentalFatigue',
    section: 'negative',
    text: 'I have difficulty thinking clearly.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'mf_20',
    parameter: 'mentalFatigue',
    subscale: 'mentalFatigue',
    section: 'negative',
    text: 'My memory is not as sharp as usual.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // RUMINATION (12 questions, scale 1-5)
  // Intrusive Rumination (7 questions)
  {
    id: 'rum_01',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'I found myself thinking about the event when I did not mean to.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_02',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'Thoughts about the event came to mind and I could not stop them.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_03',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'I had difficulty stopping myself from thinking about the event.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_04',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'Thoughts about the event kept coming into my mind.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_05',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'I could not keep images or thoughts about the event out of my mind.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_06',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'I was reminded of the event and could not let go of the thoughts.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_07',
    parameter: 'rumination',
    subscale: 'intrusiveRumination',
    section: 'negative',
    text: 'I had thoughts about the event that I could not control.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },

  // Deliberate Rumination (5 questions)
  {
    id: 'rum_08',
    parameter: 'rumination',
    subscale: 'deliberateRumination',
    section: 'negative',
    text: 'I thought about the event to try to make sense of it.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_09',
    parameter: 'rumination',
    subscale: 'deliberateRumination',
    section: 'negative',
    text: 'I tried to understand why the event happened.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_10',
    parameter: 'rumination',
    subscale: 'deliberateRumination',
    section: 'negative',
    text: 'I analyzed the event to understand it better.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_11',
    parameter: 'rumination',
    subscale: 'deliberateRumination',
    section: 'negative',
    text: 'I thought about the event and tried to learn from it.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  },
  {
    id: 'rum_12',
    parameter: 'rumination',
    subscale: 'deliberateRumination',
    section: 'negative',
    text: 'I reflected on the event to find meaning in it.',
    minScore: 1,
    maxScore: 5,
    scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    reverseScored: false
  }
];

// Validation function
export const validateQuestionnaire = () => {
  const parameterCounts = {
    selfEfficacy: 0,
    metacognition: 0,
    anxiety: 0,
    cognitiveLoad: 0,
    mentalFatigue: 0,
    rumination: 0
  };

  const seenIds = new Set();
  const errors = [];

  allQuestions.forEach((q, index) => {
    // Check unique ID
    if (seenIds.has(q.id)) {
      errors.push(`Duplicate question ID: ${q.id}`);
    }
    seenIds.add(q.id);

    // Check required fields
    if (!q.text) errors.push(`Question ${index + 1} missing text`);
    if (!q.parameter) errors.push(`Question ${index + 1} missing parameter`);
    if (q.minScore === undefined) errors.push(`Question ${index + 1} missing minScore`);
    if (q.maxScore === undefined) errors.push(`Question ${index + 1} missing maxScore`);

    // Count by parameter
    if (q.parameter in parameterCounts) {
      parameterCounts[q.parameter]++;
    }
  });

  // Verify counts
  if (parameterCounts.selfEfficacy !== 10) {
    errors.push(`Self-Efficacy: expected 10 questions, got ${parameterCounts.selfEfficacy}`);
  }
  if (parameterCounts.metacognition !== 30) {
    errors.push(`Metacognition: expected 30 questions, got ${parameterCounts.metacognition}`);
  }
  if (parameterCounts.anxiety !== 7) {
    errors.push(`Anxiety: expected 7 questions, got ${parameterCounts.anxiety}`);
  }
  if (parameterCounts.cognitiveLoad !== 6) {
    errors.push(`Cognitive Load: expected 6 questions, got ${parameterCounts.cognitiveLoad}`);
  }
  if (parameterCounts.mentalFatigue !== 20) {
    errors.push(`Mental Fatigue: expected 20 questions, got ${parameterCounts.mentalFatigue}`);
  }
  if (parameterCounts.rumination !== 12) {
    errors.push(`Rumination: expected 12 questions, got ${parameterCounts.rumination}`);
  }

  const totalQuestions = Object.values(parameterCounts).reduce((a, b) => a + b, 0);
  if (totalQuestions !== 85) {
    errors.push(`Total questions: expected 85, got ${totalQuestions}`);
  }

  if (errors.length > 0) {
    console.error('❌ Questionnaire Validation Errors:', errors);
    return false;
  }

  console.log('✅ Questionnaire validation passed: 85 questions across 6 parameters');
  return true;
};

// Run validation
validateQuestionnaire();
