    let questions = [
        {
            question: "¿Cuantas cuerdas tiene la guitarra?",
            answers: ["8",
                      "4",
                      "6"],
            correct: 2
        },
        {
            question: "¿Cual es una parte de la guitarra?",
            answers: ["Matarraya", "Tecla", "Clavijas"],
            correct: 2
        },
        {
            question: "Pequeñas divisiones metalicas en el mastil",
            answers: ["Trastes", "Cuerdas", "Puente"],
            correct: 0
        },
        {
            question: "¿Cual no es una parte de la guitarra?",
            answers: ["Trastes", "Castañeda", "Caja "],
            correct: 1
        }
    ];

    let userAnswers = new Array(questions.length).fill(null);
    
    function shuffleQuestions() {
        questions = questions.sort(() => Math.random() - 0.5);
    }

    function loadQuiz() {
        document.getElementById("quiz").innerHTML = "";
        const quizContainer = document.getElementById("quiz");
        questions.forEach((q, index) => {
            let questionElement = document.createElement("div");
            questionElement.classList.add("question");
            questionElement.innerText = q.question;
            
            let answerContainer = document.createElement("div");
            answerContainer.classList.add("answers");
            
            q.answers.forEach((answer, i) => {
                let answerElement = document.createElement("div");
                answerElement.classList.add("answer");
                answerElement.innerHTML = answer;
                answerElement.onclick = () => selectAnswer(index, i, answerElement);
                answerContainer.appendChild(answerElement);
            });
            
            quizContainer.appendChild(questionElement);
            quizContainer.appendChild(answerContainer);
        });
    }

    function selectAnswer(questionIndex, answerIndex, element) {
        userAnswers[questionIndex] = answerIndex;
        let answerElements = element.parentElement.children;
        for (let ans of answerElements) {
            ans.classList.remove("selected");
        }
        element.classList.add("selected");
    }

    function submitQuiz() {
        let score = 0;
        questions.forEach((q, index) => {
            if (userAnswers[index] === q.correct) {
                score++;
            }
        });


        if (userAnswers.includes(null)) {
    alert("Por favor responde todas las preguntas antes de finalizar.");
    return;
                }


        document.querySelectorAll(".answer").forEach(el => {
          el.style.pointerEvents = "none"; 
         });
    
        let percentage = (score / questions.length) * 100;
        let aprobado = percentage >= 60;
    
        let resultText = `Tu puntuación es: ${score}/${questions.length}`;
        resultText += aprobado ? " ¡Felicidades, aprobaste! 🎉" : " No aprobaste. 😢";
    
        document.getElementById("result").innerText = resultText;
    
        // Guardar el resultado localmente
        localStorage.setItem("quizResultado", JSON.stringify({
            puntuacion: score,
            total: questions.length,
            porcentaje: percentage,
            aprobado: aprobado,
            fecha: new Date().toISOString()
        }));
    
        // Mostrar botones según el resultado
        document.getElementById("retry").style.display = aprobado ? "none" : "block";
        document.getElementById("continue").style.display = aprobado ? "block" : "none";
    
        // Enviar mensaje al documento padre (fuera del iframe)
        if (aprobado) {
            window.parent.postMessage({ quizAprobado: true }, "*");
        }
    }

    function restartQuiz() {
        userAnswers.fill(null);
        shuffleQuestions();
        loadQuiz();
        document.getElementById("result").innerText = "";
        document.getElementById("retry").style.display = "none";
    }


   
function goToCongratulations() {
    // Ocultar la diapositiva del quiz
    document.getElementById("diapositiva-8").style.display = "none";
    
    // Mostrar la diapositiva de felicitaciones
    document.getElementById("diapositiva-final").style.display = "block";
}



shuffleQuestions();
loadQuiz();

