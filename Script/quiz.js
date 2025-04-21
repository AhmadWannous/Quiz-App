const quiz = JSON.parse(localStorage.getItem("currentQuiz"));
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!quiz || !currentUser) {
    alert("No quiz selected or not logged in.");
    window.location.href = "index.html";
}

document.getElementById("quizTitle").textContent = quiz.title;
const quizForm = document.getElementById("quizForm");

quiz.questions.forEach((q, index) => {
    const container = document.createElement("div");
    container.classList.add("question-block");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `Q${index + 1}: ${q.question}`;
    container.appendChild(questionTitle);

    q.options.forEach((option, i) => {
        const label = document.createElement("label");
        label.classList.add("quiz-label");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index}`;
        input.value = i;
        input.classList.add("quiz-input");

        const span = document.createElement("span");
        span.textContent = option;
        span.classList.add("quiz-option");

        label.appendChild(input);
        label.appendChild(span);

        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });

    quizForm.appendChild(container);
});

function submitQuiz() {
    let score = 0;

    quiz.questions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if (answer && parseInt(answer.value) === q.correct) {
            score++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>You scored ${score} out of ${quiz.questions.length}</h2>`;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].scores = users[userIndex].scores || [];
        users[userIndex].scores.push({
            quiz: quiz.title,
            score: score
        });

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
    }
}
