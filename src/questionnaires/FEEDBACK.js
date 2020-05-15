var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study
  by VS March 2020
*/

{

  question: "Please, at the end answer some questions about this experiment", 

  answers: [
          {
            type: "Continue",
            content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'feedback', 
      title: '', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{
      question: "Have you played a similar game before in a different experiment on Prolific?",
      answers: [
          {
              type: "1",
              content: "Yes"
          },
          {
              type: "2",
              content: "No"
          },
      ],
      questionId: 1,
      surveytag: 'feedback',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Have you recently answer similar questionnaires in a different experiment on Prolific?",
      answers: [
          {
              type: "1",
              content: "Yes"
          },
          {
              type: "2",
              content: "No"
          },
      ],
      questionId: 2,
      surveytag: 'feedback',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

{ 
    question: "Did you experience any difficulties during the game or questionnaires?", 

    answers: [
        { 
          type: "answer-na",
          content: "Not applicable"}
        ],

      qtype:'free-report', 
      questionId: 3,
      surveytag: 'feedback',
      title: '', 
      constraint: [
       {min: ""},
       {max: "1000000"}
      ]
  },

] 

export default quizQuestions;

