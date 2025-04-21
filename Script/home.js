const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
    alert("Please login first.");
    window.location.href = "index.html";
}
const fullName = `${currentUser.firstName} ${currentUser.lastName}`;
document.getElementById("userName").textContent = fullName;

const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const quizList = document.getElementById("quizList");
quizzes.forEach((quiz) => {
    const li = document.createElement("li");
    li.textContent = quiz.title;
    li.className = "quiz-item";
    li.style.cursor = "pointer";
    li.onclick = () => {
        localStorage.setItem("currentQuiz", JSON.stringify(quiz));
        window.location.href = "quiz.html";
    };
    quizList.appendChild(li);
});

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

function loadSampleQuizzes() {
    const sampleQuizzes = [
        {
            title: "HTML Basics",
            questions: [
                {
                    question: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "Home Tool Markup Language",
                        "Hyperlinks and Text Markup"
                    ],
                    correct: 0
                },
                {
                    question: "Which HTML element defines the title of a document?",
                    options: [
                        "<head>",
                        "<meta>",
                        "<title>"
                    ],
                    correct: 2
                },
                {
                    question: "What is the correct HTML for inserting a line break?",
                    options: [
                        "<br>",
                        "<lb>",
                        "<break>"
                    ],
                    correct: 0
                }
            ]
        },
        {
            title: "JavaScript Basics",
            questions: [
                {
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: [
                        "<js>",
                        "<scripting>",
                        "<script>"
                    ],
                    correct: 2
                },
                {
                    question: "How do you write 'Hello World' in an alert box?",
                    options: [
                        "msgBox('Hello World')",
                        "alert('Hello World')",
                        "msg('Hello World')"
                    ],
                    correct: 1
                },
                {
                    question: "How do you create a function in JavaScript?",
                    options: [
                        "function = myFunction()",
                        "function myFunction()",
                        "create myFunction()"
                    ],
                    correct: 1
                }
            ]
        },
        {
            title: "CSS Basics",
            questions: [
                {
                    question: "Which property is used to change text color in CSS?",
                    options: [
                        "text-color",
                        "font-color",
                        "color"
                    ],
                    correct: 2
                },
                {
                    question: "How do you center a block element horizontally?",
                    options: [
                        "margin: auto;",
                        "text-align: center;",
                        "position: center;"
                    ],
                    correct: 0
                },
                {
                    question: "What does the 'z-index' property control?",
                    options: [
                        "Font size",
                        "Stacking order",
                        "Margin spacing"
                    ],
                    correct: 1
                }
            ]
        },
        {
            title: "Python Basics",
            questions: [
                {
                    question: "What is the correct file extension for Python files?",
                    options: [
                        ".py", 
                        ".pt", 
                        ".python"
                    ],
                    correct: 0
                },
                {
                    question: "How do you write a comment in Python?",
                    options: ["// This is a comment", "# This is a comment", "<!-- Comment -->"],
                    correct: 1
                },
                {
                    question: "Which keyword is used to create a function in Python?",
                    options: [
                        "function", 
                        "def", 
                        "func"
                    ],
                    correct: 1
                }
            ]
        },
        {
            title: "SQL Basics",
            questions: [
                {
                    question: "Which SQL statement is used to retrieve data?",
                    options: [
                        "GET", 
                        "RETRIEVE", 
                        "SELECT"
                    ],
                    correct: 2
                },
                {
                    question: "What does 'WHERE' do in SQL?",
                    options: [
                        "Joins tables", 
                        "Filters rows", 
                        "Sorts results"
                    ],
                    correct: 1
                },
                {
                    question: "Which command is used to remove a table?",
                    options: [
                        "DELETE TABLE", 
                        "DROP TABLE", 
                        "REMOVE TABLE"
                    ],
                    correct: 1
                }
            ]
        },
        {
            title: "MySQL Basics",
            questions: [
                {
                    question: "Which port does MySQL use by default?",
                    options: [
                        "3306", 
                        "1433", 
                        "5432"
                    ],
                    correct: 0
                },
                {
                    question: "Which MySQL command is used to view all databases?",
                    options: [
                        "SHOW ALL", 
                        "SHOW DATABASES", 
                        "LIST DATABASES"
                    ],
                    correct: 1
                },
                {
                    question: "What data type is best for storing large text?",
                    options: [
                        "VARCHAR", 
                        "TEXT", 
                        "INT"
                    ],
                    correct: 1
                }
            ]
        }
    ];

    localStorage.setItem("quizzes", JSON.stringify(sampleQuizzes));
    alert("Sample quizzes loaded! Refresh the page to see them.");
}
