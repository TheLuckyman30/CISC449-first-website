const questions = [
  {
    question: "Is it called football or soccer?",
    choices: [
      { text: "Football", correct: true },
      { text: "Football", correct: true },
    ],
    selectedChoiceId: "",
    answered: false,
  },
  {
    question: "Is it called football or soccer?",
    choices: [
      { text: "Soccer", correct: true },
      { text: "Soccer", correct: true },
    ],
    selectedChoiceId: "",
    answered: false,
  },
];

const titleSection = document.getElementById("title");
const questionSection = document.getElementById("question");
const questionTitle = document.getElementById("question-title");
const questionChoiceSection = document.getElementById("question-choices");
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
  if (currentPage > -1) {
    titleSection.hidden = true;
    questionSection.hidden = false;
    prevButton.hidden = false;
    const currentQuestion = questions[currentPage];

    if (currentQuestion) {
      questionTitle.textContent = currentQuestion.question;

      const controller = new AbortController();
      const { signal } = controller;
      questionChoiceSection.innerHTML = "";
      for (const [index, choice] of currentQuestion.choices.entries()) {
        const newChoice = document.createElement("div");
        const text = document.createTextNode(choice.text);
        newChoice.appendChild(text);
        newChoice.id = `choice${index}`;
        newChoice.className =
          currentQuestion.selectedChoiceId === newChoice.id
            ? "choice selected-choice"
            : "choice";

        if (!currentQuestion.selectedChoiceId) {
          newChoice.addEventListener(
            "click",
            () => selectChoice(newChoice.id, currentQuestion, controller),
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

function selectChoice(id, currentQuestion, controller) {
  const selectedElement = document.getElementById(id);
  selectedElement.className = "choice selected-choice";
  currentQuestion.selectedChoiceId = selectedElement.id;
  controller.abort();
}
