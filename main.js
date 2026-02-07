let ballKnowledge = 0;
let currentPage = -1;

knowledge.innerHTML = ballKnowledge;

prevButton.addEventListener("click", () => {
  if (currentPage !== -1) {
    currentPage--;
    updatePage();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < questions.length) {
    currentPage++;
    updatePage();
  }
});

function updatePage() {
  questionResponse.innerHTML = "";
  questionResponse.className = "";

  if (currentPage === questions.length) {
    questionSection.style.display = "none";
    nextButton.hidden = true;
    resultSection.hidden = false;

    if (ballKnowledge <= -5) {
      resultSection.innerHTML =
        "I think an infant might have more ball knowledge than you.";
    } else if (ballKnowledge <= 0) {
      resultSection.innerHTML =
        "I wouldn't even let you near a sunday league team.";
    } else if (ballKnowledge <= 5) {
      resultSection.innerHTML = `${ballKnowledge} Not great. Not terrible.`;
    } else if (ballKnowledge <= 15) {
      resultSection.innerHTML =
        "Keep this up, and I may consult you whenever my team goes through another rough patch (it won't be long until that happens)";
    } else if (ballKnowledge <= 20) {
      resultSection.innerHTML =
        "I could only dream of having this much ball knowledge.";
    } else {
      resultSection.innerHTML =
        "Holy shit. You are the chosen one. You might also be clincally insane for subjecting yourself to this bullshit.";
    }
  } else if (currentPage > -1) {
    if (currentPage === questions.length - 1) {
      nextButton.innerHTML = "Get Results";
    } else {
      nextButton.innerHTML = "Next";
    }
    nextButton.hidden = false;
    titleSection.hidden = true;
    questionSection.style.display = "flex";
    prevButton.hidden = false;
    const currentQuestion = questions[currentPage];

    if (currentQuestion) {
      if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
      } else {
        questionImage.src = "";
      }

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
    questionSection.style.display = "none";
    prevButton.hidden = true;
  }
}

function selectChoice(id, currentQuestion, choice, controller) {
  const selectedElement = document.getElementById(id);
  selectedElement.className = "choice selected-choice";
  currentQuestion.selectedChoice = choice;
  choice.selected = true;
  ballKnowledge += choice.ballKnowledge;
  knowledge.innerHTML = ballKnowledge;
  questionResponse.innerHTML = choice.response;
  if (choice.correct) {
    questionResponse.className = "question-response response-correct";
  } else {
    questionResponse.className = "question-response response-wrong";
  }
  if (selectedElement) {
    controller.abort();
  }
}
