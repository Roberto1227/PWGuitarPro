let leccion = 1;

// Arreglo global de preguntas
let question = [];

// Preguntas por lección (puedes agregar más)
const quizzesPorLeccion = {
  1: [
    { question: "¿Qué lecciones aprendiste?", answers: ["Do Mayor, Re mayor, La mayor, Mi mayor", "La Menor, Sol mayor", "Beta 4, Sol recio"], correct: 0 },
    { question: "¿Cual es la cuerda que no se toca en el acorde Do mayor?", answers: ["Sexta", "Primera", "Tercera"], correct: 0 },
    { question: "¿Cual es la cuerda que se deja al aire en el acorde Re Mayor?", answers: ["Primera y Cuarta", "Quinta y Segunda", "Cuarta"], correct: 2 },
    { question: "¿Cual es la cuerda que no se toca en el acorde La Mayor?", answers: ["primera", "Tercera", "Sexta"], correct: 0 },
    { question: "¿Cual es la cuerda que se deja al aire en el acorde Mi Mayor?", answers: ["Primera y tercera", "Primera, segunda y Sexta", "Sexta"], correct: 1 },
  ],
  2: [
    { question: "hola2", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
  3: [
    { question: "3¿waoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
  4: [
    { question: "¿4waoaadwadadadadadadawdawdoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
  5: [
    { question: "5¿waoaadaafereregegwdaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
  6: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 },
    ],
    7: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    8: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    9: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    10: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    11: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    12: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    13: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    14: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    15: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    16: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    17: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    18: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ],
    19: [
    { question: "6¿waadadai...kwdoaoao", answers: ["Do, Fa, Sol", "La, Re, Mi", "Sol, Do, Re"], correct: 0 },
    { question: "¿Cuál es la duración de una negra?", answers: ["1 tiempo", "2 tiempos", "4 tiempos"], correct: 0 },
    { question: "¿Qué nota es la quinta justa de Do?", answers: ["Sol", "Fa", "Mi"], correct: 0 }
  ]
};

function obtenerPreguntasPorLeccion(numLeccion) {
  if (quizzesPorLeccion[numLeccion]) {
    return [...quizzesPorLeccion[numLeccion]];
  }
  console.warn(`No hay preguntas definidas para la lección ${numLeccion}.`);
  return [];
}

let userAnswers = [];
let questions = [];

// Mezcla las preguntas
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

// Cargar preguntas en el DOM
function loadQuiz() {
  userAnswers = new Array(questions.length).fill(null);
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionEl.textContent = `${index + 1}. ${q.question}`;

    const answersEl = document.createElement("div");
    answersEl.classList.add("answers");

    q.answers.forEach((answer, i) => {
      const answerEl = document.createElement("div");
      answerEl.classList.add("answer");
      answerEl.textContent = answer;
      answerEl.onclick = () => selectAnswer(index, i, answerEl);
      answersEl.appendChild(answerEl);
    });

    quizContainer.appendChild(questionEl);
    quizContainer.appendChild(answersEl);
  });
}

// Selección de respuesta
function selectAnswer(questionIndex, answerIndex, element) {
  userAnswers[questionIndex] = answerIndex;
  const siblings = element.parentElement.children;
  for (const sibling of siblings) {
    sibling.classList.remove("selected");
  }
  element.classList.add("selected");
}

// Evaluar
function submitQuiz() {
  if (userAnswers.includes(null)) {
    alert("Por favor responde todas las preguntas antes de finalizar.");
    return;
  }

  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.correct) score++;
  });

  document.querySelectorAll(".answer").forEach(el => {
    el.style.pointerEvents = "none";
  });

  const resultEl = document.getElementById("result");
  const percentage = (score / questions.length) * 100;
  const aprobado = percentage >= 60;

  let textoResultado = `Tu puntuación es: ${score} / ${questions.length}. `;
  textoResultado += aprobado ? "¡Felicidades, aprobaste! 🎉" : "No aprobaste. 😢";
  resultEl.textContent = textoResultado;

  const retryBtn = document.getElementById("retry");
  retryBtn.style.display = "inline-block";

  if (score < questions.length) {
    retryBtn.classList.remove("discreto-flotante");
    retryBtn.classList.add("visible-normal");
  } else {
    retryBtn.classList.remove("visible-normal");
    retryBtn.classList.add("discreto-flotante");
  }

  if (aprobado) {
    window.parent.postMessage({ quizAprobado: true }, "*");
  }
}

// Reiniciar
function restartQuiz() {
  userAnswers.fill(null);
  shuffleQuestions();
  loadQuiz();
  document.getElementById("result").textContent = "";
  document.getElementById("retry").style.display = "none";
  document.querySelectorAll(".answer").forEach(el => {
    el.style.pointerEvents = "auto";
    el.classList.remove("selected");
  });
}

function cargarLeccion(nuevaLeccion) {
  leccion = nuevaLeccion;

  if (quizzesPorLeccion[leccion]) {
    questions = [...quizzesPorLeccion[leccion]];
  } else {
    console.warn(`No hay preguntas definidas para la lección ${leccion}.`);
    questions = [];
  }

  restartQuiz();  // Esta función mezcla, carga y limpia todo para la nueva lección
}

// Obtiene query param leccion y carga quiz
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.onload = () => {
  const leccionParam = parseInt(getQueryParam('leccion'));
  if (!isNaN(leccionParam)) {
    cargarLeccion(leccionParam);
  } else {
    cargarLeccion(1);
  }
};

window.cargarLeccion = cargarLeccion;