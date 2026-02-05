const questions = [
  {
    question: "Is it called football or soccer?",
    choices: ["Football", "Football"],
  },
];

let currentPage = -1;

const nextButton = document.getElementById("next-page");
nextButton.addEventListener("click", () => {
  if (currentPage < questions.length - 1) {
    currentPage++;
    updatePage();
  }
});

const prevButton = document.getElementById("prev-page");
prevButton.addEventListener("click", () => {
  if (currentPage !== -1) {
    currentPage--;
    updatePage();
  }
});

function updatePage() {
  if (currentPage > -1) {
    document.getElementById("title").hidden = true;
    document.getElementById("question").hidden = false;
    prevButton.hidden = false;
    const currentQuestion = questions[currentPage];

    if (currentQuestion) {
      document.getElementById("question-title").textContent =
        currentQuestion.question;

      const choiceSection = document.getElementById("question-choices");
      choiceSection.innerHTML = "";
      for (const choice of currentQuestion.choices) {
        const newChoice = document.createElement("div");
        const text = document.createTextNode(choice);
        newChoice.appendChild(text);
        newChoice.className = "choice";
        choiceSection.appendChild(newChoice);
      }
    }
  } else {
    document.getElementById("title").hidden = false;
    prevButton.hidden = true;
    document.getElementById("question").hidden = true;
  }
}
