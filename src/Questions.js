const qBank = [
  {
    question:
      "What’s the first word to be spoken in the 'Friends' pilot?",
    answers: ["It’s", "So", "There’s", "When"],
    correct: "There’s",
    questionId: "099099"
  },
  {
    question:
      'How many categories of towels does Monica have?',
    answers: ["4", "6", "11", "15"],
    correct: "11",
    questionId: "183452"
  },
  {
    question:
      "What is the name of Rachel’s hairless cat?",
    answers: ["Fluffy", "Miss Kitty", "Mrs. Whiskerson", "Razer"],
    correct: "Mrs. Whiskerson",
    questionId: "267908"
  },
  {
    question: "How many babies are born during the show’s ten seasons?",
    answers: [
      "3",
      "5",
      "7",
      "9"
    ],
    correct: "7",
    questionId: "333247"
  },
  {
    question: "What was Rachel’s childhood dog called?",
    answers: ["Bo-Bo", "Buster", "Nala", "LaPoo"],
    correct: "LaPoo",
    questionId: "496293"
  },
  {
    question:
      "Which book does Joey keep in the freezer?",
    answers: [
      "It",
      "Jane Eyre",
      "The Shining",
      "Little Women"
    ],
    correct: "The Shining",
    questionId: "588909"
  },
  {
    question:
      'Which PBS show never answered Phoebe’s letter?',
    answers: ["Electric Company", "Mister Rogers’ Neighborhood", "Reading Rainbow", "Sesame Street"],
    correct: "Sesame Street",
    questionId: "648452"
  },
  {
    question: "Where did Chandler say he was moving in order to break up with Janice?",
    answers: ["France", "Italy", "Yemen", "Hungary"],
    correct: "Yemen",
    questionId: "786649"
  },
  {
    question:
      "How many long-stemmed roses does Ross send to Emily?",
    answers: ["54", "60", "72", "86"],
    correct: "72",
    questionId: "839754"
  },
  {
    question:
      "What is Phoebe’s ex-husband’s name?",
    answers: [
      "Duncan",
      "Kyle",
      "Tyler",
      "Vince"
    ],
    correct: "Duncan",
    questionId: "98390"
  },
  {
    question: "Who was Monica’s midnight mystery kisser?",
    answers: ["Chandler", "Chip Matthews", "Joey", "Ross"],
    correct: "Ross",
    questionId: "1071006"
  },
  {
    question: "Of all ten ‘Friends’ seasons, which season did *not* feature a Thanksgiving episode?",
    answers: ["Season 2", "Season 3", "Season 4", "Season 5"],
    correct: "Season 2",
    questionId: "1174154"
  },
  {
    question: "Who was/were in a spinoff after ‘Friends’ ended?",
    answers: ["Chandler & Joey", "Phoebe", "Joey", "Ross & Rachel"],
    correct: "Joey",
    questionId: "1226535"
  },
  {
    question: "Who co-founded the “I Hate Rachel Green Club” with Ross?",
    answers: ["Billy Trate", " Sean McCann", "Will Colbert", "Ken Adams"],
    correct: "Will Colbert",
    questionId: "1310938"
  },
  {
    question: "How many sisters does Joey have?",
    answers: ["5", "6", "7", "8"],
    correct: "7",
    questionId: "1436873"
  },
  {
    question: "Which soap opera does Gunther tell Joey he was in before working at Central Perk?",
    answers: ["All My Children", "General Hospital", "Virgo", "The Young and the Restless"],
    correct: "All My Children",
    questionId: "1515110"
  },
  {
    question: "Rachel writes Ross a letter in “The One with the Jellyfish”. How many pages long is it?",
    answers: ["19", "18", "12", "15"],
    correct: "18",
    questionId: "1642728"
  },
  {
    question:
      "During the complete run of Friends, how many times does Ross get married and eventually divorced?",
    answers: ["2", "3", "4", "5"],
    correct: "3",
    questionId: "1747256"
  },
  {
    question:
      "Who utters the last line in the last episode of 'Friends'?",
    answers: ["Chandler", "Phoebe", "Joey", "Rachel"],
    correct: "Chandler",
    questionId: "1822532"
  },
  {
    question: "What is the brand of detergent that Ross and Rachel use to wash their clothes?",
    answers: [
      "Persil",
      "Almüt",
      "Überweiss",
      "Ichiban"
    ],
    correct: "Überweiss",
    questionId: "195075"
  },
  {
    question: 'Paul Rudd played Mike on Friends. Whose boyfriend was he?',
    answers: ["Monica", "Rachel", "Phoebe", "He was just a friend"],
    correct: "Phoebe",
    questionId: "2019778"
  },
  {
    question: "What is Ross’ first wife’s name?",
    answers: ["Emily", "Carol", "Rachel", "Susan"],
    correct: "Carol",
    questionId: "2134343"
  },
  {
    question: "On which soap opera does Joey have a recurring role as Dr. Drake Ramoray?",
    answers:["All My Children", "General Hospital", "Virgo", "Days Of Our Lives"],
    correct: "Days Of Our Lives",
    questionId: "2210799"
  },
  {
    question:
      "To whom is Joey and Chandler’s TV Guideaddressed?",
    answers: ["Miss Chanandler Bong", "Mr Joseph Tribianni", "Ms Josephine Tribeca", "Mr Chandler Bing"],
    correct: "Miss Chanandler Bong",
    questionId: "2379831"
  },
  {
    question: "What is Phoebe’s twin sister’s name?",
    answers: ["Ursula", "Regina", "Emma", "Amy"],
    correct: "Ursula",
    questionId: "2426418"
  },
  {
    question: "Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?",
    answers: ["Italy", "France", "England", "Greece"],
    correct: "Italy",
    questionId: "2510086"
  },
  {
    question: "Rachel was popular in high school. Her prom date Chip ditched her for which girl at school?",
    answers: [
      "Sally Roberts",
      "Amy Welsh",
      "Valerie Thompson",
      "Missy Goldberg"
    ],
    correct: "Amy Welsh",
    questionId: "2685745"
  }
  ];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

