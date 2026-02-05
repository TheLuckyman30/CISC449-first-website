const questions = [
  { question: "Is it called football or soccer?", choices: ["Yes", "No"] },
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

    if (questions[currentPage]) {
      document.getElementById("question-title").textContent =
        questions[currentPage].question;
    }
  } else {
    document.getElementById("title").hidden = false;
    prevButton.hidden = true;
    document.getElementById("question").hidden = true;
  }
}
