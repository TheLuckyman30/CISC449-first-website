const questions = [
  {
    question: "What kind of football do you think this quiz is referring to?",
    choices: [
      {
        text: "American Football ",
        response: "Are you fucking serious???",
        correct: false,
        selected: false,
      },
      {
        text: "European Football",
        response: "You know me so well &#129392",
        correct: true,
        selected: false,
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
        selected: false,
      },
      {
        text: "Football",
        response: "Only one true answer",
        correct: true,
        selected: false,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Who is this very prominent football figure?",
    choices: [
      {
        text: "Pep Guardiola",
        response:
          "This will be the last easy question...probably. I don't really know what I'm doing.",
        correct: true,
        selected: false,
      },
      {
        text: "Jose Mourinho",
        response: "You are NOT the special one",
        correct: false,
        selected: false,
      },
      {
        text: "Carlo Ancelotti",
        response: "&#129320",
        correct: false,
        selected: false,
      },
      {
        text: "I don't fucking know",
        response: "Wow. You really don't know ball",
        correct: false,
        selected: false,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "How about this guy (another totally prominent football figure)?",
    choices: [
      {
        text: "James Zanzi",
        response:
          "Gonna be honest here, just took this name from a generated player in my football manager save. Still wrong though.",
        correct: false,
        selected: false,
      },
      {
        text: "Lionel Messi",
        response:
          "I'm assuming you selected this to see what the response is, because that is the only rational explanation for this answer.",
        correct: false,
        selected: false,
      },
      {
        text: "Bill Buttlicker",
        response: "His family built this country by the way.",
        correct: true,
        selected: false,
      },
      {
        text: "Isn't that Jim from The Office? He's not a football player.",
        response:
          "You clearly don't remember every episode. How many times have you watched it?",
        correct: false,
        selected: false,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "What is wrong with this tactic?",
    choices: [
      {
        text: "Not attacking enough",
        response:
          "Buddy. One more player on attack and we could be seeing a cricket score.",
        correct: false,
        selected: false,
      },
      {
        text: "Nothing, it's perfect. It provides good attacking support which will lead to plenty of chances.",
        response: "I guess you don't give a shit about the midfield.",
        correct: false,
        selected: false,
      },
      {
        text: "The midfield seems a little to open",
        response:
          "Damn. I'm impressed. Do you want to be assistant (to the) manager?",
        correct: true,
        selected: false,
      },

      {
        text: "What the fuck am I looking at???",
        response: "A shitty tactic that was created by an insane person (me).",
        correct: false,
        selected: false,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "Ok. How about this one?",
    choices: [
      {
        text: "Well it seems fine to me, maybe your players are just shit?",
        response: "THATS THE SPIRIT! It's obviously not my fault...",
        correct: true,
        selected: false,
      },
      {
        text: "This one seems more reasonable than the last one, so I trust you got it this time.",
        response:
          "I have not won a game in ages with this shit. And you're going to sit there and tell me everything is fine? Send help, I don't know what I'm fucking doing.",
        correct: false,
        selected: false,
      },
      {
        text: "Do YOU know how to setup a team properly?",
        response: "No.",
        correct: false,
        selected: false,
      },

      {
        text: "I still don't know what any of this bullshit means.",
        response: "Heard of google? Look it up then.",
        correct: false,
        selected: false,
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
        correct: false,
        selected: false,
      },
      {
        text: "Getting stuck as a midtable team for many years",
        response: "Mmmmmm, sounds like a skill issue to me.",
        correct: false,
        selected: false,
      },
      {
        text: "Losing your best player",
        response: "Never wanted him anyway, and he's dead to me now.",
        correct: false,
        selected: false,
      },

      {
        text: "Seeing the other team sub on their 35 year old veteran center back in the 90th minute who's retiring in a weeks time and has never scored a professional goal in his career, and you're only 1-0 up and you need the win to secure the title. Oh and this is the last game of the season and there is 10 minutes of added time. Whats the worst that could happen?",
        response: "Hahahahahaha...I'm in trouble",
        correct: true,
        selected: false,
      },
    ],
    selectedChoice: null,
  },
  {
    question: "What's this guy known for?",
    choices: [
      {
        text: "Wearing the number 19 jersey for a team that wears yellow.",
        response: "Congratualtions. You know how to look at a photo.",
        correct: false,
        selected: false,
      },
      {
        text: "He scored two stoppage time goals against Watford to win Charlton Athletic promotion to the Premier League",
        response:
          "Wait a second, I didn't tell you this story? How the fuck did you know this?",
        correct: true,
        selected: false,
      },
      {
        text: "Trick question, nothing",
        response: "How dare you",
        correct: false,
        selected: false,
      },

      {
        text: "Is this quiz going to end soon?",
        response:
          "You know there is this magical thing called getting up and walking away. I don't know why you've subjected yourself to this brain rot for so long.",
        correct: false,
        selected: false,
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
        correct: false,
        selected: false,
      },
      {
        text: "Probably something",
        response: "Wow. Generational answer right here.",
        correct: false,
        selected: false,
      },
      {
        text: "An attack minded centeral midfielder that operates in the half spaces",
        response:
          "You searched this up didn't you. Explain to me what a half space is (please).",
        correct: true,
        selected: false,
      },

      {
        text: "Is this a new type of cheese? Does it give you superpowers?",
        response:
          "Yes, and if you eat it, you immeaditley become a good football manager.",
        correct: false,
        selected: false,
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
        correct: false,
        selected: false,
      },
      {
        text: "No. You might actually be insane, go see a doctor.",
        response: "Can't argue with that logic.",
        correct: true,
        selected: false,
      },
    ],
    selectedChoice: null,
  },
];

const titleSection = document.getElementById("title");
const questionSection = document.getElementById("question");
const questionTitle = document.getElementById("question-title");
const questionChoiceSection = document.getElementById("question-choices");
const questionResponse = document.getElementById("question-response");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");
let currentPage = -1;

prevButton.addEventListener("click", () => {
  if (currentPage !== -1) {
    currentPage--;
    updatePage();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < questions.length - 1) {
    currentPage++;
    updatePage();
  }
});

function updatePage() {
  questionResponse.innerHTML = "";
  questionResponse.className = "";

  if (currentPage > -1) {
    titleSection.hidden = true;
    questionSection.hidden = false;
    prevButton.hidden = false;
    const currentQuestion = questions[currentPage];

    if (currentQuestion) {
      questionTitle.textContent = currentQuestion.question;

      if (currentQuestion.selectedChoice) {
        questionResponse.innerHTML = currentQuestion.selectedChoice.response;
        if (currentQuestion.selectedChoice.correct) {
          questionResponse.className = "question-response response-correct";
        } else {
          questionResponse.className = "question-response response-wrong";
        }
      }

      const controller = new AbortController();
      const { signal } = controller;
      questionChoiceSection.innerHTML = "";
      for (const [index, choice] of currentQuestion.choices.entries()) {
        const newChoice = document.createElement("div");
        const text = document.createTextNode(choice.text);
        newChoice.appendChild(text);
        newChoice.id = `choice${index}`;
        newChoice.className = choice.selected
          ? "choice selected-choice"
          : "choice";

        if (!currentQuestion.selectedChoice) {
          newChoice.addEventListener(
            "click",
            () =>
              selectChoice(newChoice.id, currentQuestion, choice, controller),
            {
              signal,
            },
          );
        }

        questionChoiceSection.appendChild(newChoice);
      }
    }
  } else {
    titleSection.hidden = false;
    questionSection.hidden = true;
    prevButton.hidden = true;
  }
}

function selectChoice(id, currentQuestion, choice, controller) {
  const selectedElement = document.getElementById(id);
  selectedElement.className = "choice selected-choice";
  currentQuestion.selectedChoice = choice;
  choice.selected = true;
  questionResponse.innerHTML = choice.response;
  if (choice.correct) {
    questionResponse.className = "question-response response-correct";
  } else {
    questionResponse.className = "question-response response-wrong";
  }
  if (selectedElement) controller.abort();
}
