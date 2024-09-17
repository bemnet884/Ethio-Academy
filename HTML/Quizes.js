
      const questions = {
        biology: [
          {
            question: "What is the powerhouse of the cell?",
            choices: [
              "Nucleus",
              "Mitochondria",
              "Ribosome",
              "Endoplasmic reticulum",
            ],
            answer: "Mitochondria",
          },
          {
            question:
              "Which organelle is responsible for photosynthesis in plant cells?",
            choices: [
              "Chloroplast",
              "Mitochondria",
              "Nucleus",
              "Golgi apparatus",
            ],
            answer: "Chloroplast",
          },
          {
            question:
              "What is the genetic material found in the nucleus of eukaryotic cells?",
            choices: ["DNA", "RNA", "Protein", "ATP"],
            answer: "DNA",
          },
          {
            question:
              "Which process results in the production of two identical daughter cells?",
            choices: ["Mitosis", "Meiosis", "Transcription", "Translation"],
            answer: "Mitosis",
          },
          {
            question: "What is the basic unit of heredity?",
            choices: ["Gene", "Chromosome", "Allele", "Nucleotide"],
            answer: "Gene",
          },
        ],
        chemistry: [
          {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Fe", "Hg"],
            answer: "Au",
          },
          {
            question: "Which element has the atomic number 6?",
            choices: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
            answer: "Carbon",
          },
          {
            question: "What is the chemical formula for water?",
            choices: ["H2O2", "CO2", "H2O", "CH4"],
            answer: "H2O",
          },
          {
            question: "What is the pH value of pure water?",
            choices: ["7", "1", "14", "0"],
            answer: "7",
          },
          {
            question: "Which gas makes up the majority of Earth's atmosphere?",
            choices: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
            answer: "Nitrogen",
          },
        ],
        history: [
          {
            question: "Who was the first president of the United States?",
            choices: [
              "Thomas Jefferson",
              "John Adams",
              "George Washington",
              "James Madison",
            ],
            answer: "George Washington",
          },
          {
            question:
              "Which ancient civilization built the Great Pyramid of Giza?",
            choices: [
              "Roman Empire",
              "Maya civilization",
              "Egyptian civilization",
              "Greek civilization",
            ],
            answer: "Egyptian civilization",
          },
          {
            question:
              "Who was the leader of the Soviet Union during World War II?",
            choices: [
              "Joseph Stalin",
              "Vladimir Lenin",
              "Nikita Khrushchev",
              "Mikhail Gorbachev",
            ],
            answer: "Joseph Stalin",
          },
          {
            question: "In what year did the Berlin Wall fall?",
            choices: ["1989", "1991", "1985", "1993"],
            answer: "1989",
          },
          {
            question:
              "Which war was fought between the North and South regions of the United States?",
            choices: [
              "American Revolution",
              "World War I",
              "Civil War",
              "Vietnam War",
            ],
            answer: "Civil War",
          },
        ],
        math: [
          {
            question: "What is the value of π (pi) approximately?",
            choices: ["3.14", "2.72", "1.61", "4.39"],
            answer: "3.14",
          },
          {
            question: "What is the square root of 144?",
            choices: ["12", "11", "10", "9"],
            answer: "12",
          },
          {
            question: "What is the value of 5! (factorial)?",
            choices: ["120", "24", "60", "720"],
            answer: "120",
          },
          {
            question: "If x = 2 and y = 3, what is the value of x^2 + y^2?",
            choices: ["13", "14", "15", "16"],
            answer: "13",
          },
          {
            question: "What is the value of log10(100)?",
            choices: ["1", "2", "10", "100"],
            answer: "2",
          },
        ],
      };

      const subjectSelection = document.getElementById("subject-selection");
      const startButton = document.getElementById("start");
      const questionElement = document.getElementById("question");
      const choicesElement = document.getElementById("choices");
      const submitButton = document.getElementById("submit");
      const nextButton = document.getElementById("next");
      const feedbackElement = document.getElementById("feedback");

      let currentQuestions = [];
      let currentQuestionIndex = 0;
      let score = 0;

      // Function to display the current question
      function displayQuestion() {
        const question = currentQuestions[currentQuestionIndex];
        questionElement.textContent = question.question;

        choicesElement.innerHTML = "";
        question.choices.forEach((choice) => {
          const button = document.createElement("button");
          button.textContent = choice;
          button.classList.add("choice");
          button.addEventListener("click", () => submitAnswer(choice));
          choicesElement.appendChild(button);
        });
      }

      // Function to submit the user's answer
      function submitAnswer(choice) {
        const question = currentQuestions[currentQuestionIndex];
        if (choice === question.answer) {
          score++;
          feedbackElement.textContent = "Correct!";
        } else {
          feedbackElement.textContent =
            "Incorrect. The correct answer is: " + question.answer;
        }
        submitButton.disabled = true;
      }

      // Function to move to the next question
      function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
          displayQuestion();
          submitButton.disabled = false;
          feedbackElement.textContent = "";
        } else {
          endQuiz();
        }
      }

      // Function to end the quiz
      function endQuiz() {
        questionElement.textContent = "Quiz Complete";
        choicesElement.innerHTML = "";
        feedbackElement.textContent =
          "Your Score: " + score + " / " + currentQuestions.length;
        submitButton.style.display = "none";
        nextButton.style.display = "none";
      }

      // Event listener for start button click
      startButton.addEventListener("click", () => {
        const subject = document.getElementById("subject").value;
        currentQuestions = questions[subject];
        shuffle(currentQuestions);
        displayQuestion();
        subjectSelection.style.display = "none";
      });

      // Event listeners for button clicks
      submitButton.addEventListener(
        "click",
        () => submitButton.disabled || submitAnswer()
      );
      nextButton.addEventListener("click", nextQuestion);

      // Function to shuffle an array
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }