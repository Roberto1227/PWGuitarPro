// --- QuizArray.js ---

const quizzesPorLeccion = {
    1: [
        { question: "¿Cuál es el primer acorde que aprendiste?", answers: ["Do Mayor", "La Menor", "Sol Mayor"], correct: 0 },
        { question: "¿Qué nota es la fundamental de Re Mayor?", answers: ["Re", "Mi", "Do"], correct: 0 },
        { question: "artate pija loco", answers: ["puta", "gay",  "pito"], correct: 0}
    ],
    
     2: [
        { question: "¿Cuál es el primer acorde que aprendiste?", answers: ["Do Mayor", "La Menor", "Sol Mayor"], correct: 0 },
        { question: "¿Qué nota es la fundamental de Re Mayor?", answers: ["Re", "Mi", "Do"], correct: 0 },
        { question: "artate pija loco", answers: ["puta", "gay",  "pito"], correct: 0}
    ]
    
    // Agrega más sets de preguntas según sea necesario
};

// Obtener número de lección del atributo del body
const leccion = parseInt(document.body.dataset.leccion) || 1;

// Verifica si existen preguntas para esta lección
if (quizzesPorLeccion[leccion]) {
    // Reemplazar el arreglo global 'questions' definido en QuizPartes.js
    if (typeof questions !== 'undefined') {
        questions.splice(0, questions.length, ...quizzesPorLeccion[leccion]);

        if (typeof shuffleQuestions === 'function' && typeof loadQuiz === 'function') {
            shuffleQuestions();
            loadQuiz();
        }
    } else {
        console.warn("El arreglo global 'questions' no está disponible.");
    }
} else {
    console.warn(`No hay preguntas definidas para la lección ${leccion}`);
}