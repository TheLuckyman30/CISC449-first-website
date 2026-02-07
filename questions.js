const questions = [
  {
    question: "What kind of football do you think this quiz is referring to?",
    choices: [
      {
        text: "American Football ",
        response: "Are you fucking serious???",
        ballKnowledge: -10,
      },
      {
        text: "European Football",
        response: "You know me so well &#129392",
        correct: true,
        ballKnowledge: 1,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Is it called football or soccer?",
    choices: [
      {
        text: "Football",
        response: "Only one true answer",
        correct: true,
        ballKnowledge: 0,
      },
      {
        text: "Football",
        response: "Only one true answer",
        correct: true,
        ballKnowledge: 0,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Who is this very prominent football figure?",
    image: "./images/pep.jpg",
    choices: [
      {
        text: "Pep Guardiola",
        response:
          "This will be the last easy question...probably. I don't really know what I'm doing.",
        correct: true,
        ballKnowledge: 1,
      },
      {
        text: "Jose Mourinho",
        response: "You are NOT the special one",
        ballKnowledge: -1,
      },
      {
        text: "Carlo Ancelotti",
        response: "&#129320",
        ballKnowledge: -1,
      },
      {
        text: "I don't fucking know",
        response: "Wow. You really don't know ball",
        ballKnowledge: -1,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "How about this guy (another totally prominent football figure)?",
    image: "./images/jim.png",
    choices: [
      {
        text: "James Zanzi",
        response:
          "Gonna be honest here, just took this name from a generated player in my football manager save. Still wrong though.",
        ballKnowledge: -2,
      },
      {
        text: "Lionel Messi",
        response:
          "I'm assuming you selected this to see what the response is, because that is the only rational explanation for this answer.",
        ballKnowledge: -5,
      },
      {
        text: "Bill Buttlicker",
        response: "His family built this country by the way.",
        correct: true,
        ballKnowledge: 2,
      },
      {
        text: "Isn't that Jim from The Office? He's not a football player.",
        response:
          "You clearly don't remember every episode. How many times have you watched it?",
        ballKnowledge: -1,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "What is wrong with this tactic?",
    image: "./images/tactic1.png",
    choices: [
      {
        text: "Not attacking enough",
        response:
          "Buddy. One more player on attack and we could be seeing a cricket score.",
        ballKnowledge: -1,
      },
      {
        text: "Nothing, it's perfect. It provides good attacking support which will lead to plenty of chances.",
        response: "I guess you don't give a shit about the midfield.",
        ballKnowledge: -1,
      },
      {
        text: "The midfield seems a little to open",
        response:
          "Damn. I'm impressed. Do you want to be assistant (to the) manager?",
        correct: true,
        ballKnowledge: 5,
      },
      {
        text: "What the fuck am I looking at???",
        response: "A shitty tactic that was created by an insane person (me).",
        ballKnowledge: -5,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Ok. How about this one?",
    image: "./images/tactic2.png",
    choices: [
      {
        text: "Well it seems fine to me, maybe your players are just shit?",
        response: "THATS THE SPIRIT! It's obviously not my fault...",
        correct: true,
        ballKnowledge: 5,
      },
      {
        text: "This one seems more reasonable than the last one, so I trust you got it this time.",
        response:
          "I have not won a game in ages with this shit. And you're going to sit there and tell me everything is fine? Send help, I don't know what I'm fucking doing.",
        ballKnowledge: -1,
      },
      {
        text: "Do YOU know how to setup a team properly?",
        response: "No.",
        ballKnowledge: 2,
      },
      {
        text: "I still don't know what any of this bullshit means.",
        response: "Heard of google? Look it up then.",
        ballKnowledge: -5,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "What is the most terrifying thing in Football Manager?",
    choices: [
      {
        text: "Erling Haaland",
        response:
          "Really? Haalands got nothing on the 35 year old veteran center back who was just subbed on and has never scored a professional goal in his career. Oh shit...what's he doing at the edge of my box??!?!?!?",
        ballKnowledge: 0,
      },
      {
        text: "Getting stuck as a midtable team for many years",
        response: "Mmmmmm, sounds like a skill issue to me.",
        ballKnowledge: -1,
      },
      {
        text: "Losing your best player",
        response: "Never wanted him anyway, and he's dead to me now.",
        ballKnowledge: -1,
      },
      {
        text: "Seeing the other team sub on their 35 year old veteran center back in the 90th minute who's retiring in a weeks time and has never scored a professional goal in his career, and you're only 1-0 up and you need the win to secure the title. Oh and this is the last game of the season and there is 10 minutes of added time. Whats the worst that could happen?",
        response: "Hahahahahaha...I'm in trouble",
        correct: true,
        ballKnowledge: 2,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "What's this guy known for?",
    image: "./images/xadas.png",
    choices: [
      {
        text: "Wearing the number 19 jersey for a team that wears yellow.",
        response: "Congratualtions. You know how to look at a photo.",
        ballKnowledge: -5,
      },
      {
        text: "He scored two stoppage time goals against Watford to win Charlton Athletic promotion to the Premier League",
        response:
          "Wait a second, I didn't tell you this story? How the fuck did you know this?",
        correct: true,
        ballKnowledge: 10,
      },
      {
        text: "Trick question, nothing",
        response: "How dare you",
        ballKnowledge: -10,
      },
      {
        text: "Is this quiz going to end soon?",
        response:
          "You know there is this magical thing called getting up and walking away. I don't know why you've subjected yourself to this brain rot for so long.",
        ballKnowledge: -5,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Ok I'm running out of questions to ask, what does a mezzala do?",
    choices: [
      {
        text: "A what now?",
        response: "A MEZZALA. Do you want me to scream it louder?",
        ballKnowledge: -1,
      },
      {
        text: "Probably something",
        response: "Wow. Generational answer right here.",
        ballKnowledge: -2,
      },
      {
        text: "An attack minded centeral midfielder that operates in the half spaces",
        response:
          "You searched this up didn't you. Explain to me what a half space is (please).",
        correct: true,
        ballKnowledge: 1,
      },
      {
        text: "Is this a new type of cheese? Does it give you superpowers?",
        response:
          "Yes, and if you eat it, you immeaditley become a good football manager.",
        ballKnowledge: -5,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Did you like this quiz?",
    choices: [
      {
        text: "Yes",
        response:
          "Wow, you might be a more insane than I am if you actually enjoyed this.",
        ballKnowledge: 0,
      },
      {
        text: "No. You might actually be insane, go see a doctor.",
        response: "Can't argue with that logic.",
        correct: true,
        ballKnowledge: 0,
      },
    ],
    selectedChoice: null,
  },
];
