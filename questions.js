const questions = [
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
    question: "Is it called football or soccer?",
    choices: [
      {
        text: "Soccer",
        response: "Seriously...",
        correct: false,
        selected: false,
      },
      {
        text: "Soccer",
        response: "Seriously...",
        correct: false,
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
