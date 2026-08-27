// Interpretation service for Project AURA assessment
// Generates dynamic review comments based on scores

const interpretations = {
  selfEfficacy: {
    ranges: [
      {
        min: 30,
        max: 40,
        level: 'High',
        title: 'Strong Confidence',
        review: 'Your responses suggest that you generally have strong confidence in your ability to handle challenges, work toward goals, and adapt when situations become difficult.',
        reflection: 'This can be a useful strength when approaching demanding academic tasks or unfamiliar situations. Notice the situations where you feel most confident and draw upon those experiences.',
        resource: 'Continue leveraging this confidence as a foundation. When facing new challenges, remind yourself of past successes.'
      },
      {
        min: 20,
        max: 29,
        level: 'Moderate',
        title: 'Varying Confidence',
        review: 'Your responses suggest that you generally believe in your abilities, although your confidence may vary depending on the situation.',
        reflection: 'Consider noticing the situations where your confidence is strongest and using those experiences as a reference when approaching more difficult tasks.',
        resource: 'Explore what factors help build your confidence in specific areas. Creating small wins can help strengthen your overall sense of capability.'
      },
      {
        min: 10,
        max: 19,
        level: 'Lower',
        title: 'Variable Confidence',
        review: 'Your responses suggest that you may sometimes doubt your ability to handle challenging situations.',
        reflection: 'Confidence can naturally vary across different situations, and this result may be an opportunity to explore strategies that help you approach difficult tasks with greater confidence.',
        resource: 'Consider breaking larger challenges into smaller, more manageable steps. Building confidence through incremental successes can be very effective.'
      }
    ]
  },

  metacognition: {
    ranges: [
      {
        min: 90,
        max: 120,
        level: 'Higher',
        title: 'Heightened Awareness',
        review: 'Your responses suggest considerable awareness of your thinking patterns and beliefs about worry and mental control.',
        reflection: 'This awareness is valuable. You may find it useful to notice which thinking patterns serve you well and which might be worth exploring further.',
        resource: 'Consider whether all your attention to your thinking is helpful or whether sometimes letting thoughts pass without analyzing them might feel easier.'
      },
      {
        min: 60,
        max: 89,
        level: 'Moderate',
        title: 'Balanced Awareness',
        review: 'Your responses suggest a moderate level of awareness about how you relate to your thoughts and worries.',
        reflection: 'This balanced approach may serve you well. Notice patterns that feel helpful and those that create additional mental effort.',
        resource: 'Reflect on moments when your thinking feels most natural and unforced. What makes those moments different?'
      },
      {
        min: 30,
        max: 59,
        level: 'Lower',
        title: 'Less Focused Awareness',
        review: 'Your responses suggest that you may have less concern about controlling or analyzing your thoughts compared to others.',
        reflection: 'This can sometimes be a strength, allowing thoughts to flow more naturally.',
        resource: 'If you sometimes wish you could understand your thinking patterns better, gentle reflection and curiosity about your own mind might be interesting to explore.'
      }
    ]
  },

  positiveBeliefsAboutWorry: {
    ranges: [
      {
        min: 18,
        max: 24,
        level: 'Higher',
        title: 'Strong Belief in Worry',
        review: 'Your responses suggest that you often view worrying as useful for preparation, organization, or problem-solving.',
        reflection: 'It may be helpful to notice whether worrying actually helps you take action or instead keeps your attention focused on possible problems without moving toward solutions.',
        resource: 'Experiment with separating planning and preparation (which can be helpful) from repetitive worry (which may not be).'
      },
      {
        min: 12,
        max: 17,
        level: 'Moderate',
        title: 'Mixed Beliefs About Worry',
        review: 'Your responses suggest that you sometimes view worrying as helpful and sometimes see it as less useful.',
        reflection: 'Notice the situations where you believe worry helps versus where it feels unproductive.',
        resource: 'This mixed view may already reflect your natural wisdom about when worry helps and when it does not.'
      },
      {
        min: 6,
        max: 11,
        level: 'Lower',
        title: 'Limited Belief in Worry',
        review: 'Your responses suggest that you generally do not view worrying as particularly helpful for preparation or problem-solving.',
        reflection: 'This can be a useful perspective that may help you move toward action rather than getting caught in worry cycles.',
        resource: 'Trust your natural tendency to move past worry and into action when facing challenges.'
      }
    ]
  },

  negativeBeliefsAboutWorry: {
    ranges: [
      {
        min: 18,
        max: 24,
        level: 'Higher',
        title: 'Strong Concerns About Worry',
        review: 'Your responses suggest that you may hold concerns about whether worry is difficult to control or potentially harmful.',
        reflection: 'Recognizing that thoughts can occur without requiring immediate action may help create more flexibility around them. Not all unwanted thoughts mean something is wrong.',
        resource: 'Explore techniques like noting thoughts without judgment, or treating your thoughts as observations rather than commands to act.'
      },
      {
        min: 12,
        max: 17,
        level: 'Moderate',
        title: 'Moderate Concern About Worry',
        review: 'Your responses suggest that you sometimes view worry as difficult to control or potentially concerning.',
        reflection: 'This is a common experience. Noticing that thoughts can come and go on their own may help create space around worrying.',
        resource: 'When worry feels strong, remind yourself that the feeling will pass, even if you do not actively try to stop it.'
      },
      {
        min: 6,
        max: 11,
        level: 'Lower',
        title: 'Few Concerns About Worry',
        review: 'Your responses suggest that you generally do not view worry as uncontrollable or inherently harmful.',
        reflection: 'This perspective may help you stay relatively calm when worrying thoughts arise.',
        resource: 'Your natural ease with worry thoughts is a useful resource. Trust that perspective.'
      }
    ]
  },

  cognitiveConfidence: {
    ranges: [
      {
        min: 18,
        max: 24,
        level: 'Lower',
        title: 'Some Memory Concerns',
        review: 'Your responses suggest that you may have some concerns about your memory or ability to remember things reliably.',
        reflection: 'It may be useful to notice that memory naturally varies and that having some doubt about memory is very common.',
        resource: 'Try external supports like notes, calendars, or digital reminders. These tools support everyone, not just people with memory concerns.'
      },
      {
        min: 12,
        max: 17,
        level: 'Moderate',
        title: 'Moderate Memory Confidence',
        review: 'Your responses suggest that you have moderate confidence in your memory, with some situations feeling easier than others.',
        reflection: 'Notice which types of memory tasks feel easier for you and build upon those strengths.',
        resource: 'Use systems and techniques that work for you. Everyone has different memory strengths.'
      },
      {
        min: 6,
        max: 11,
        level: 'Higher',
        title: 'Strong Memory Confidence',
        review: 'Your responses suggest relatively few concerns about your ability to remember information.',
        reflection: 'This confidence may represent a useful source of strength when approaching academic tasks.',
        resource: 'Your memory confidence is an asset. Use it as a foundation for tackling complex learning.'
      }
    ]
  },

  needForControl: {
    ranges: [
      {
        min: 18,
        max: 24,
        level: 'Higher',
        title: 'Strong Need for Control',
        review: 'Your responses suggest a relatively strong preference for maintaining control over your thoughts.',
        reflection: 'It may be useful to explore whether allowing thoughts to come and go without actively controlling them sometimes makes tasks feel easier.',
        resource: 'Experiment with noticing thoughts without trying to change them. This paradoxically can make unwanted thoughts less bothersome.'
      },
      {
        min: 12,
        max: 17,
        level: 'Moderate',
        title: 'Balanced Control Preferences',
        review: 'Your responses suggest a moderate preference for controlling your thoughts, depending on the situation.',
        reflection: 'You may naturally balance between trying to manage your thinking and allowing it to flow.',
        resource: 'Trust your intuition about when to redirect your thoughts and when to simply let them be.'
      },
      {
        min: 6,
        max: 11,
        level: 'Lower',
        title: 'Flexible Thought Approach',
        review: 'Your responses suggest that you generally do not feel a strong need to control or monitor your thoughts.',
        reflection: 'This flexibility may allow your thoughts to flow more naturally.',
        resource: 'This natural approach may serve you well. Trust your ability to work with whatever thoughts arise.'
      }
    ]
  },

  cognitiveSelfConsciousness: {
    ranges: [
      {
        min: 18,
        max: 24,
        level: 'Higher',
        title: 'High Self-Awareness',
        review: 'Your responses suggest that you pay considerable attention to how your mind works and how you think.',
        reflection: 'This self-awareness can be valuable. Notice whether it contributes to better understanding or sometimes feels like additional mental work.',
        resource: 'Balance your valuable self-awareness with moments of simply thinking without analyzing your thinking.'
      },
      {
        min: 12,
        max: 17,
        level: 'Moderate',
        title: 'Balanced Self-Awareness',
        review: 'Your responses suggest a moderate level of attention to your own thinking processes.',
        reflection: 'This balanced awareness may help you understand your own mind without becoming overly self-focused.',
        resource: 'You may naturally slip between thinking and observing your thinking. Trust this balance.'
      },
      {
        min: 6,
        max: 11,
        level: 'Lower',
        title: 'Minimal Self-Consciousness',
        review: 'Your responses suggest that you do not spend much time analyzing or monitoring your own thinking.',
        reflection: 'This can be a strength, allowing you to act and think without excessive self-reflection.',
        resource: 'Your natural ability to move through tasks without overthinking is valuable.'
      }
    ]
  },

  anxiety: {
    ranges: [
      {
        min: 26,
        max: 35,
        level: 'More Noticeable',
        title: 'Higher Anxiety Indicators',
        review: 'Your responses suggest that worry, nervousness, or tension has been more noticeable in your recent experience.',
        reflection: 'It may be worth paying attention to what situations contribute to this pattern and what helps you feel calmer.',
        resource: 'Consider exploring strategies like structured breathing, brief physical activity, time in nature, or speaking with someone you trust. Short breaks and planning can also help.'
      },
      {
        min: 14,
        max: 25,
        level: 'Moderately Noticeable',
        title: 'Moderate Anxiety Indicators',
        review: 'Your responses suggest some recent experiences of worry or tension.',
        reflection: 'These experiences can vary naturally with workload, circumstances, and life events. Notice when they are strongest and when they ease.',
        resource: 'Small changes like adjusting your routine, adding movement, or connecting with others might help manage these experiences.'
      },
      {
        min: 7,
        max: 13,
        level: 'Less Noticeable',
        title: 'Lower Anxiety Indicators',
        review: 'Your responses suggest relatively few recent experiences of nervousness, excessive worry, or difficulty relaxing.',
        reflection: 'Notice what is helping you maintain this relatively calm baseline. Whatever you are doing, it is working.',
        resource: 'Continue with the habits and patterns that keep you feeling calm and grounded.'
      }
    ]
  },

  cognitiveLoad: {
    ranges: [
      {
        min: 23,
        max: 30,
        level: 'More Noticeable',
        title: 'Higher Cognitive Demand',
        review: 'Your responses suggest that academic information and mentally demanding tasks may currently require a substantial amount of mental effort.',
        reflection: 'Consider whether breaking complex material into smaller sections, spacing study sessions, or reducing simultaneous tasks changes how mentally demanding your work feels.',
        resource: 'Techniques like the Pomodoro method (focused work with breaks), creating outlines before diving into material, or studying one subject at a time might help.'
      },
      {
        min: 13,
        max: 22,
        level: 'Moderately Noticeable',
        title: 'Moderate Cognitive Demand',
        review: 'Your responses suggest that you experience a moderate amount of mental effort when working on academic tasks.',
        reflection: 'This is natural. Notice which types of tasks feel most demanding and which feel easier.',
        resource: 'Match your strategies to the specific task. Some work requires focused intensity; other work benefits from lighter, exploratory thinking.'
      },
      {
        min: 6,
        max: 12,
        level: 'Less Noticeable',
        title: 'Lower Cognitive Demand',
        review: 'Your responses suggest that academic tasks and mentally demanding work currently feel relatively manageable in terms of mental effort.',
        reflection: 'Notice what allows you to work with relative ease. Is it the types of tasks, your preparation, your environment, or something else?',
        resource: 'Maintain the conditions that make work feel manageable. Protect your focus time and learning environment.'
      }
    ]
  },

  mentalLoad: {
    ranges: [
      {
        min: 11,
        max: 15,
        level: 'More Noticeable',
        title: 'High Mental Load',
        review: 'Your responses suggest that tasks feel particularly mentally demanding right now.',
        reflection: 'Consider what is adding to this mental load. Is it the volume of work, the complexity, time pressure, or multiple simultaneous demands?',
        resource: 'Reducing simultaneous demands or breaking tasks into phases might help. Sometimes just naming the source of mental load helps.'
      },
      {
        min: 8,
        max: 10,
        level: 'Moderate',
        title: 'Moderate Mental Load',
        review: 'Your responses suggest that tasks require a moderate level of mental effort.',
        reflection: 'Notice when load feels heavier and when it eases.',
        resource: 'Match task difficulty to your available mental energy throughout your day.'
      },
      {
        min: 3,
        max: 7,
        level: 'Less Noticeable',
        title: 'Lower Mental Load',
        review: 'Your responses suggest that current tasks feel relatively effortless mentally.',
        reflection: 'This is useful information about what kinds of work feel manageable for you.',
        resource: 'Use this time to tackle more complex projects while your mental energy is high.'
      }
    ]
  },

  mentalEffort: {
    ranges: [
      {
        min: 11,
        max: 15,
        level: 'Higher',
        title: 'Strong Effort Investment',
        review: 'Your responses suggest that you are investing substantial effort in your work right now.',
        reflection: 'Notice whether this level of effort feels sustainable or if you are pushing hard.',
        resource: 'High effort is sometimes necessary. Ensure you are balancing it with adequate rest and recovery.'
      },
      {
        min: 8,
        max: 10,
        level: 'Moderate',
        title: 'Balanced Effort',
        review: 'Your responses suggest that you are working with moderate, steady effort.',
        reflection: 'This sustainable pace may be helping you make consistent progress.',
        resource: 'This balance between effort and pacing is often most effective for long-term success.'
      },
      {
        min: 3,
        max: 7,
        level: 'Lower',
        title: 'Minimal Effort Needed',
        review: 'Your responses suggest that current work requires relatively little intense effort from you.',
        reflection: 'This might reflect the nature of your current tasks or a period where things feel easier.',
        resource: 'Use lighter-demand periods to consolidate learning or tackle tasks that do require more energy.'
      }
    ]
  },

  mentalFatigue: {
    ranges: [
      {
        min: 61,
        max: 100,
        level: 'More Noticeable',
        title: 'Noticeable Mental Fatigue',
        review: 'Your responses suggest that mental fatigue has been more noticeable in your recent experience.',
        reflection: 'This may be a useful signal to pay attention to rest, workload, study patterns, and recovery time.',
        resource: 'Consider whether adding breaks, reducing simultaneous demands, ensuring sleep quality, or incorporating physical activity might help restore your mental energy.'
      },
      {
        min: 40,
        max: 60,
        level: 'Moderately Noticeable',
        title: 'Moderate Mental Fatigue',
        review: 'Your responses suggest that mental tiredness may occur at times, particularly around demanding academic tasks.',
        reflection: 'This is natural. Notice when your mental energy tends to drop most noticeably.',
        resource: 'Experiment with your schedule to find when your energy is highest. Match challenging tasks to your peak energy times.'
      },
      {
        min: 20,
        max: 39,
        level: 'Less Noticeable',
        title: 'Lower Mental Fatigue',
        review: 'Your responses suggest relatively little recent mental exhaustion associated with your work.',
        reflection: 'You may be managing your workload and recovery well.',
        resource: 'Continue with whatever balance you have found. Protect the routines that are keeping you feeling energized.'
      }
    ]
  },

  generalFatigue: {
    ranges: [
      {
        min: 16,
        max: 20,
        level: 'More Noticeable',
        title: 'Higher General Fatigue',
        review: 'Your responses suggest that feeling tired or fatigued has been more noticeable for you.',
        reflection: 'Consider your sleep, rest time, and whether you are recovering adequately between demands.',
        resource: 'Prioritize sleep quality and duration. Even small improvements in sleep can significantly affect how rested you feel.'
      },
      {
        min: 11,
        max: 15,
        level: 'Moderate',
        title: 'Moderate General Fatigue',
        review: 'Your responses suggest that you experience some tiredness, which is a normal part of daily life.',
        reflection: 'Notice what restores your energy most effectively.',
        resource: 'Regular movement, good sleep, and occasional complete breaks from demands can help.'
      },
      {
        min: 4,
        max: 10,
        level: 'Less Noticeable',
        title: 'Lower General Fatigue',
        review: 'Your responses suggest that you generally feel rested and not particularly tired.',
        reflection: 'Something is working well in your routine. Notice what contributes to this.',
        resource: 'Continue protecting the habits that keep you feeling energized.'
      }
    ]
  },

  physicalFatigue: {
    ranges: [
      {
        min: 16,
        max: 20,
        level: 'More Noticeable',
        title: 'Higher Physical Fatigue',
        review: 'Your responses suggest that physical tiredness or heaviness has been noticeable.',
        reflection: 'This might reflect sustained work, limited movement, or sleep quality. Consider how your body is feeling.',
        resource: 'Short breaks with stretching or movement, better sleep, and reduced sitting time often help.'
      },
      {
        min: 11,
        max: 15,
        level: 'Moderate',
        title: 'Moderate Physical Fatigue',
        review: 'Your responses suggest some physical tiredness, which can naturally vary day to day.',
        reflection: 'Notice which activities help your body feel more energized.',
        resource: 'Regular movement, whether walking, stretching, or sports, tends to improve physical vitality.'
      },
      {
        min: 4,
        max: 10,
        level: 'Less Noticeable',
        title: 'Lower Physical Fatigue',
        review: 'Your responses suggest that you generally feel physically rested.',
        reflection: 'Your body is likely recovering well from your daily activities.',
        resource: 'Continue with your current balance of activity and rest.'
      }
    ]
  },

  reducedActivity: {
    ranges: [
      {
        min: 16,
        max: 20,
        level: 'More Noticeable',
        title: 'Reduced Activity Levels',
        review: 'Your responses suggest that you may be accomplishing less or engaging in fewer activities than usual.',
        reflection: 'Consider whether this reflects genuine reduced capacity, changed priorities, or something else worth exploring.',
        resource: 'Start with very small, easy activities and gradually build. Sometimes breaking the cycle requires just small steps.'
      },
      {
        min: 11,
        max: 15,
        level: 'Moderate',
        title: 'Moderately Reduced Activity',
        review: 'Your responses suggest that your activity levels may have shifted somewhat.',
        reflection: 'This might be temporary or reflect a normal variation in what you can manage.',
        resource: 'Notice which activities feel most important or most manageable right now.'
      },
      {
        min: 4,
        max: 10,
        level: 'Less Noticeable',
        title: 'Maintained Activity Levels',
        review: 'Your responses suggest that you are maintaining your usual level of activities.',
        reflection: 'You seem to be managing your responsibilities well.',
        resource: 'Continue with what is working. Celebrate what you are accomplishing.'
      }
    ]
  },

  reducedMotivation: {
    ranges: [
      {
        min: 16,
        max: 20,
        level: 'More Noticeable',
        title: 'Lower Motivation',
        review: 'Your responses suggest that motivation or desire to do things has been reduced.',
        reflection: 'This can sometimes signal that you need rest or that something needs to change. It is worth paying attention to.',
        resource: 'Sometimes motivation returns with rest. Other times, small changes in what you are doing (trying something new, changing your environment) can help.'
      },
      {
        min: 11,
        max: 15,
        level: 'Moderate',
        title: 'Variable Motivation',
        review: 'Your responses suggest that your motivation naturally rises and falls.',
        reflection: 'This is normal. Notice what kinds of activities spark your interest.',
        resource: 'Try to include at least one activity each day that genuinely interests you, even if it is small.'
      },
      {
        min: 4,
        max: 10,
        level: 'Higher',
        title: 'Strong Motivation',
        review: 'Your responses suggest that you generally feel motivated and interested in doing things.',
        reflection: 'This inner drive is valuable. Use it effectively.',
        resource: 'Channel your motivation toward your priorities. Your engagement is a strength.'
      }
    ]
  },

  intrusiveRumination: {
    ranges: [
      {
        min: 26,
        max: 35,
        level: 'More Noticeable',
        title: 'Higher Intrusive Thinking',
        review: 'Your responses suggest that repetitive or intrusive thoughts may be occurring more frequently or feel harder to disengage from.',
        reflection: 'Consider exploring strategies that support attention shifting, reflection, and recovery.',
        resource: 'Techniques like mindfulness, physical activity to redirect attention, or speaking with someone can help. Sometimes accepting the thoughts rather than fighting them paradoxically makes them less bothersome.'
      },
      {
        min: 17,
        max: 25,
        level: 'Moderately Noticeable',
        title: 'Moderate Intrusive Thinking',
        review: 'Your responses suggest that you sometimes experience repetitive thoughts that are difficult to disengage from.',
        reflection: 'You may find it useful to notice what situations tend to trigger this pattern and which activities help you shift attention.',
        resource: 'Build a "menu" of activities that help redirect your attention when you notice intrusive thoughts. What works for you?'
      },
      {
        min: 7,
        max: 16,
        level: 'Less Noticeable',
        title: 'Lower Intrusive Thinking',
        review: 'Your responses suggest that unwanted repetitive thoughts are relatively infrequent at the moment.',
        reflection: 'This is a positive indicator. Notice what conditions support your ability to avoid excessive rumination.',
        resource: 'Whatever you are doing is working. Keep protecting those conditions.'
      }
    ]
  },

  deliberateRumination: {
    ranges: [
      {
        min: 18,
        max: 25,
        level: 'Higher',
        title: 'Frequent Reflection',
        review: 'Your responses suggest that you often engage in deliberate reflection to understand events and make meaning from your experiences.',
        reflection: 'This reflective tendency can support learning and growth. Notice whether your reflection feels productive or sometimes goes in circles.',
        resource: 'Set boundaries on reflection time. Reflection is valuable; endless rumination is not. Consider: "I have reflected on this enough; now I will move on."'
      },
      {
        min: 11,
        max: 17,
        level: 'Moderate',
        title: 'Balanced Reflection',
        review: 'Your responses suggest that you engage in a moderate amount of reflection to understand and learn from your experiences.',
        reflection: 'This natural balance between reflection and moving forward is often helpful.',
        resource: 'Trust your natural rhythm of thinking things through and then moving on.'
      },
      {
        min: 5,
        max: 10,
        level: 'Lower',
        title: 'Minimal Reflection',
        review: 'Your responses suggest that you engage in relatively little deliberate reflection on events.',
        reflection: 'You may naturally move forward without extensive processing.',
        resource: 'This forward-focused approach has value. Trust it, while remaining open to deeper reflection when something feels important.'
      }
    ]
  }
};

export const interpretationService = {
  getSelfEfficacyInterpretation: (score) => {
    return findInterpretation(interpretations.selfEfficacy, score);
  },

  getMetacognitionInterpretation: (score) => {
    return findInterpretation(interpretations.metacognition, score);
  },

  getPositiveBeliefsAboutWorryInterpretation: (score) => {
    return findInterpretation(interpretations.positiveBeliefsAboutWorry, score);
  },

  getNegativeBeliefsAboutWorryInterpretation: (score) => {
    return findInterpretation(interpretations.negativeBeliefsAboutWorry, score);
  },

  getCognitiveConfidenceInterpretation: (score) => {
    return findInterpretation(interpretations.cognitiveConfidence, score);
  },

  getNeedForControlInterpretation: (score) => {
    return findInterpretation(interpretations.needForControl, score);
  },

  getCognitiveSelfConsciousnessInterpretation: (score) => {
    return findInterpretation(interpretations.cognitiveSelfConsciousness, score);
  },

  getAnxietyInterpretation: (score) => {
    return findInterpretation(interpretations.anxiety, score);
  },

  getCognitiveLoadInterpretation: (score) => {
    return findInterpretation(interpretations.cognitiveLoad, score);
  },

  getMentalLoadInterpretation: (score) => {
    return findInterpretation(interpretations.mentalLoad, score);
  },

  getMentalEffortInterpretation: (score) => {
    return findInterpretation(interpretations.mentalEffort, score);
  },

  getMentalFatigueInterpretation: (score) => {
    return findInterpretation(interpretations.mentalFatigue, score);
  },

  getGeneralFatigueInterpretation: (score) => {
    return findInterpretation(interpretations.generalFatigue, score);
  },

  getPhysicalFatigueInterpretation: (score) => {
    return findInterpretation(interpretations.physicalFatigue, score);
  },

  getReducedActivityInterpretation: (score) => {
    return findInterpretation(interpretations.reducedActivity, score);
  },

  getReducedMotivationInterpretation: (score) => {
    return findInterpretation(interpretations.reducedMotivation, score);
  },

  getIntrusiveRuminationInterpretation: (score) => {
    return findInterpretation(interpretations.intrusiveRumination, score);
  },

  getDeliberateRuminationInterpretation: (score) => {
    return findInterpretation(interpretations.deliberateRumination, score);
  }
};

const findInterpretation = (paramInterpretations, score) => {
  const range = paramInterpretations.ranges.find(
    r => score >= r.min && score <= r.max
  );
  return range || paramInterpretations.ranges[0];
};

export default interpretationService;
