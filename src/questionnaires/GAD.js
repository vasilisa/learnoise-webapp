var quizQuestions = [

/*
  GAD-7 anxiety scale for the LEARNOISE ONLINE PROJECT 
  by VS May 2020
*/

{
  question: "Over the LAST 2 WEEKS, how often have you been bothered by the following problems?",
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'gad', 
      title: '', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{   
      question:"How often have you been feeling nervous, anxious or on edge?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 1,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 

  },

  
  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 2,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
  },

{   
      question:"How often have you been feeling not being able to stop or control worrying?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 3,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 

  },

  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 4,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
  },

  {   
      question:"How often have you been worrying too much about different things?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 5,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 

  },

  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 6,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
  },

  {   
      question:"How often have you had trouble relaxing?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 7,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 


  },

  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 8,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
  },

  {   
      question:"How often have you been so restless that it is hard to sit still?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 9,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 
 

  },

  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 10,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {   
      question:"How often have you been becoming easily annoyed or irritable?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 11,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 
 

  },

  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 12,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {   
      question:"How often have you been feeling afraid as if something awful might happen?", 

      answers: [{
         type: "gad-1",
        content: "Nearly every day"},

        {type: "gad-2",
        content: "More than half the days"},

        {type: "gad-3",
        content: "Several days"},

        {type: "gad-4",
        content: "Not at all"},
      ],

      qtype: 'quiz',
      questionId: 13,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ],
      condition: true, 
 

  },

  { question:"How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 

      answers: [{
         type: "gad-1",
        content: "Extremely difficult"},

        {type: "gad-2",
        content: "Very difficult"},

        {type: "gad-3",
        content: "Somewhat difficult"},

        {type: "gad-4",
        content: "Not difficult at all"},
    
      ],
      qtype: 'quiz',
      questionId: 14,
      surveytag: 'gad',
      title: '', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  ]

  export default quizQuestions; 
