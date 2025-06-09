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
    
    { image: "Acordes/basico/7/QuizSOl.png",  question: "Que acorde es este?", answers: ["Mi menor", "Sol mayor", "Re alargado"], correct: 1,  },
    { question: "¿Como se toca FA Mayor?", answers: [ { image: "Acordes/basico/7/QuizFamayor.png"}, { image: "Acordes/basico/7/QuizSimayor.png"}, { image: "Acordes/basico/7/QuizDomenor.png"}] , correct: 0 }, 
    { question: "¿Que acorde nesecita una Cejilla?", answers: ["Do mayor", "La", "Si mayor"], correct: 2 },
    { question: "¿Cual es la cuerda que se deja al aire en el acorde Sol Mayor", answers: ["Cuarta, primera y segunda", "Cuarta, Quinta y Sexta", "segunda y tercera"], correct: 1 }
 ],
    3: [
    { question: "¿Cuáles cuerdas se deben tocar para el acorde Re menor?", answers: ["Segunda, cuarta y quinta", "Primera, sexta y segunda", "Cuarta, tercera y quinta"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo 1 en el acorde Re menor?", answers: ["Cuerda 4, Traste 3", "Cuerda 1, Traste 1", "Cuerda 2, Traste 1"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Do menor?", answers: ["Todas las cuerdas, traste 3", "Primera y segunda cuerda, traste 2", "Cuerda 6, traste 4"], correct: 0 },
    { question: "¿Qué cuerda no se debe tocar en el acorde Do menor?", answers: ["Cuerda 3", "Cuerda 6", "Cuerda 1"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo medio (2) en el acorde Do menor?", answers: ["Cuerda 4, Traste 4", "Cuerda 5, Traste 5", "Cuerda 3, Traste 5"], correct: 0 },
    { question: "¿Cuál es la cuerda al aire en el acorde Re menor?", answers: ["Cuerda 3", "Cuerda 4", "Cuerda 5"], correct: 1 },
    { question: "¿Qué representa el símbolo 'X' en un diagrama de acordes?", answers: ["Cuerda que se toca al aire", "Cuerda que no se debe tocar", "Cuerda que se pisa con el dedo índice"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo anular (3) en el acorde Do menor?", answers: ["Cuerda 5, Traste 5", "Cuerda 4, Traste 3", "Cuerda 6, Traste 4"], correct: 0 }
  ],
  4: [
   { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Sol menor?", answers: ["Cejilla en traste 3", "Cuerda 5, traste 5", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 5 en el acorde Sol menor?", answers: ["Dedo 2", "Dedo 3", "Dedo 4"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 5 en el acorde Sol menor?", answers: ["Dedo 1", "Dedo 2", "Dedo 4"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Si menor?", answers: ["Cuerda 2, traste 1", "Cejilla en traste 2", "Cuerda 4, traste 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 3 en el acorde Si menor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 4 en el acorde Si menor?", answers: ["Dedo 2", "Dedo 3", "Dedo 4"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Fa menor?", answers: ["Cejilla en traste 1", "Cuerda 5, traste 3", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 3 en el acorde Fa menor?", answers: ["Dedo 2", "Dedo 3", "Dedo 4"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde Fa menor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué cuerda no se debe tocar en el acorde Fa menor?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 4"], correct: 0 },
  ],
  5: [
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Do7?", answers: ["Cuerda 2, traste 1", "Cuerda 4, traste 2", "Cuerda 3, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 2 en el acorde Do7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Re7?", answers: ["Cuerda 3, traste 2", "Cuerda 2, traste 1", "Cuerda 1, traste 2"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 2 en el acorde Re7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué cuerda no se debe tocar en el acorde Re7?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde La7?", answers: ["Cuerda 4, traste 2", "Cuerda 3, traste 2", "Cuerda 2, traste 1"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 2 en el acorde La7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Cuántos dedos se usan para presionar cuerdas en el acorde La7?", answers: ["2", "3", "4"], correct: 0 },
    { question: "¿Qué significa el término 'cejilla' en la guitarra?", answers: ["Presionar varias cuerdas con un solo dedo", "Tocar una cuerda al aire", "Usar el dedo meñique para presionar una cuerda"], correct: 0 },
    { question: "¿Qué mensaje transmite la práctica de acordes como Re7 y Do7?", answers: ["La música es solo entretenimiento", "La música tiene el poder de transformar el mundo", "La música no requiere esfuerzo"], correct: 1 }

  ],
  6: [
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Sol7?", answers: ["Cuerda 1, traste 1", "Cuerda 5, traste 2", "Cuerda 6, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 2 en el acorde Sol7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 6, traste 3 en el acorde Sol7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde Sol7?", answers: ["Cuerda 2, 3 y 4", "Cuerda 1 y 6", "Cuerda 5 y 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Si7?", answers: ["Cuerda 4, traste 1", "Cuerda 5, traste 2", "Cuerda 3, traste 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 2 en el acorde Si7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 2 en el acorde Si7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Fa7?", answers: ["Cejilla en traste 1", "Cuerda 2, traste 2", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 2 en el acorde Fa7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde Fa7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
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

    // Añadir texto de la pregunta
    const textoPregunta = document.createElement("p");
    textoPregunta.textContent = `${index + 1}. ${q.question}`;
    questionEl.appendChild(textoPregunta);

    // Añadir imagen si existe
    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = "Imagen de la pregunta";
      img.style.maxWidth = "100%";
      img.style.margin = "10px 0";
      questionEl.appendChild(img);
    }

    const answersEl = document.createElement("div");
    answersEl.classList.add("answers");

    q.answers.forEach((answer, i) => {
      const answerEl = document.createElement("div");
      answerEl.classList.add("answer");

      let texto = "";
      let imgSrc = null;

      if (typeof answer === "string") {
        texto = answer;
      } else if (typeof answer === "object") {
        texto = answer.text || "";
        imgSrc = answer.image || null;
      }

      const textoEl = document.createElement("span");
      textoEl.textContent = texto;
      answerEl.appendChild(textoEl);

      if (imgSrc) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Imagen respuesta";
        img.style.maxWidth = "175px";
        img.style.display = "block";
        img.style.marginTop = "8px";
        answerEl.appendChild(img);
      }

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


let currentQuestion = 0;

