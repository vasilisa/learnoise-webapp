var quizQuestions = [

/*
  PHQ-9 patient health questionnaire for the LEARNOISE ONLINE PROJECT 
  by VS March 2020
*/

{

	question: "Please, rate yourself on each of the criteria. Over the LAST 2 WEEKS, how often have you been bothered by any of the following problems? Tick the box that best describes your experience."
	answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'phq', 
      title: 'Personal experience', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},


{
      question: "Over the last 2 weeks, I often had little interest or pleasure in doing things",
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 1,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "Over the last 2 weeks, I often have been feeling down, depressed, or hopeless",
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 2,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Over the last 2 weeks, I often had trouble falling/staying asleep, sleeping too much",
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 3,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Over the last 2 weeks, I often have been feeling tired or having little energy",
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 4,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Over the last 2 weeks, I often had poor appetite or overeating",
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 5,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Feeling bad about yourself or that you are a failure or have let yourself or your family down", 
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 6,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Over the last 2 weeks, I often had trouble concentrating on things, such as reading the newspaper or watching television", 
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 7,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Moving or speaking so slowly that other people could have noticed. Or the opposite, being so fidgety or restless that you have been moving around a lot more than usual", 
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 8,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Thoughts that you would be better off dead or of hurting yourself in some way", 
      answers: [
          {
              type: "phq-1",
              content: "Nearly every day"
          },
          {
              type: "phq-2",
              content: "More than half the days"
          },
          {
              type: "phq-3",
              content: "Several days"
          },
          {
              type: "phq-4",
              content: "Not at all"
          },
      ],
      questionId: 9,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "If you checked off any problem in this questionnaire so far, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
      answers: [
          {
              type: "phq-1",
              content: "Extremely difficult"
          },
          {
              type: "phq-2",
              content: "Very difficult"
          },
          {
              type: "phq-3",
              content: "Somewhat difficult"
          },
          {
              type: "phq-4",
              content: "Not difficult at all"
          },
      ],
      questionId: 10,
      surveytag: 'phq',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

]