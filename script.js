const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Tolstoy", "Dickens"],
      answer: "Shakespeare",
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const resultContainer = document.getElementById("result");
  
  function loadQuestion() {
    if (currentQuestion < quizData.length) {
      const currentQuiz = quizData[currentQuestion];
      questionContainer.innerHTML = `<h2>${currentQuiz.question}</h2>`;
      optionsContainer.innerHTML = currentQuiz.options
        .map(
          (option, index) =>
            `<button class="option-btn" onclick="selectAnswer(this, '${option}')">${option}</button>`
        )
        .join("");
    } else {
      showResult();
    }
  }
  
  function selectAnswer(button, option) {
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    button.dataset.selectedAnswer = option;
  }
  
  function submitAnswer() {
    const selectedButton = document.querySelector(".option-btn.selected");
    if (!selectedButton) {
      alert("Please select an answer!");
      return;
    }
  
    const selectedAnswer = selectedButton.dataset.selectedAnswer;
    if (selectedAnswer === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
    loadQuestion();
  }
  
  function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    submitButton.style.display = "none";
  
    resultContainer.innerHTML = `
      <h2>You answered ${score} out of ${quizData.length} questions correctly!</h2>
    `;
  }
  
  submitButton.addEventListener("click", submitAnswer);
  loadQuestion();
  