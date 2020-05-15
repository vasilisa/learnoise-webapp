var quizQuestions = [

/*
  Zung self-rating depression scale for the LEARNOISE ONLINE PROJECT 
  by VS March 2020
*/

{

	question: "Please read each statement and decide how much of the time the statement describes how you have been feeling during the PAST SEVERAL DAYS", 
  answers: [
          {
            type: "Continue",
            content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'zung', 
      title: '', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},


{
      question: "I feel down-hearted and blue",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 1,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Morning is when I feel the best",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 2,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I have crying spells or feel like it",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 3,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I have trouble sleeping at night",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 4,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I eat as much as I used to",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 5,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I still enjoy sex",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 6,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I notice that I am losing weight",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 7,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I have trouble with constipation",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 8,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "My heart beats faster than usual",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 9,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I get tired for no reason",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 10,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "My mind is as clear as it used to be",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 11,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I find it easy to do the things I used to do",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 12,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I am restless and can't keep still",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 13,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I feel hopeful about the future",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 14,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I am more irritable than usual",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 15,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I find it easy to make decisions",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 16,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I feel that I am useful and needed",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 17,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "My life is pretty full",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 18,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I feel that others would be better off if I were dead",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 19,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I still enjoy the things I used to do",
      answers: [
          {
              type: "zung-1",
              content: "Most of the time"
          },
          {
              type: "zung-2",
              content: "Good part of the time"
          },
          {
              type: "zung-3",
              content: "Some of the time"
          },
          {
              type: "zung-4",
              content: "A little of the time"
          },
      ],
      questionId: 20,
      surveytag: 'zung',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


]

export default quizQuestions;
