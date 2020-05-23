var quizQuestions = [

/*
  Liebowitz Social Anxiety Scale 
  by VS May 2020
*/

{

	question: "This measure assesses the way that social phobia plays a role in your life across a variety of situations. Read each situation carefully and answer two questions about that situation. If you come across a situation that you ordinarily do not experience, we ask that you imagine 'what if you were faced with that situation', and then rate the degree to which you would fear this hypothetical situation and how often you would tend to avoid it. Please base your ratings on the way that the situations have affected you in the PAST WEEK.", 

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 0,
      surveytag: 'lsa',
      title: '', // to be changed
      constraint: [
        {min: ""},
        {max: ""}
      ]
},

{
      question: "How anxious or fearful do you feel when using a telephone in public?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
						type: "lsa-2",
						content: "Moderately"
          },
          {
						type: "lsa-3",
						content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 1,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid using a telephone in public?",
      answers: [
           {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 2,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when participating in a small group activity",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }

      ],
      questionId: 3,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid participating in a small group activity?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 4,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when eating in public?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 5,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
{
      question: "How often do you avoid eating in public?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 6,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when drinking with others?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 7,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid drinking with others?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 8,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when talking to someone in authority?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 9,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid talking to someone in authority?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 10,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

   {
      question: "How anxious or fearful do you feel when acting, performing, or speaking in front of an audience?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 11,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid acting, performing, or speaking in front of an audience?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 12,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "How anxious or fearful do you feel when going to a party?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 13,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid going to a party?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 14,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when working while being observed?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 15,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid working while being observed?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 16,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when writing while being observed?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 17,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid writing while being observed?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 18,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when calling someone you don't know very well?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 19,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid calling someone you don't know very well?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 20,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when talking face to face with someone you don't know very well?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 21,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid talking face to face with someone you don't know very well?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 22,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when meeting strangers?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 23,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid meeting strangers?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 24,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "How anxious or fearful do you feel when urintaing in a public bathroom?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 25,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid urintating in a public bathroom?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 26,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when entering a room when others are already seated?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 27,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid entering a room when others are already seated?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 28,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when being the center of attention?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 29,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid being the center of attention?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 30,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when speaking up at a meeting?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 31,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid speaking up at a meeting?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 32,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when taking a test of your ability, skill, or knowledge?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 33,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid taking a test of your ability, skill, or knowledge?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 34,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when expressing disagreement or disapproval to someone you don't know very well?",
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 35,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid expressing disagreement or disapproval to someone you don't know very well?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 36,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when looking someone who you don't know very well straight in the eyes?", 
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 37,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid looking someone who you don't know very well straight in the eyes?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 38,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when giving a prepared oral talk to a group?", 
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 39,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid giving a prepared oral talk to a group?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 40,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when trying to make someone's acquaintance for the purpose of a romantic/sexual relationship?", 
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 41,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid trying to make someone's acquaintance for the purpose of a romantic/sexual relationship?",
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 42,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when returning goods to a store for a refund?", 
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 43,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid returning goods to a store for a refund?", 
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 44,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when giving a party?", 
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 45,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid giving a party?", 
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 46,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How anxious or fearful do you feel when resisting a high pressure sales person?", 
      answers: [
          {
              type: "lsa-1",
              content: "Severely"
          },
          {
            type: "lsa-2",
            content: "Moderately"
          },
          {
            type: "lsa-3",
            content: "Mildly"
          },
          {
              type: "lsa-4",
              content: "Not at all"
          }
      ],
      questionId: 47,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "How often do you avoid resisting a high pressure sales person?", 
      answers: [
          {
              type: "lsa-1",
              content: "Usually"
          },
          {
            type: "lsa-2",
            content: "Often"
          },
          {
            type: "lsa-3",
            content: "Occasionally"
          },
          {
              type: "lsa-4",
              content: "Never"
          }
      ],
      questionId: 48,
      surveytag: 'lsa',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  ]

export default quizQuestions; 
