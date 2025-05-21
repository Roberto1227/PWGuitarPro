// Variables globales
let chords = []; // Será asignada dinámicamente según la lección seleccionada
let currentChordIndex = 0; // Índice del acorde actual

// Variables para controlar las diapositivas
let currentSlide = 1;
const totalSlides = 4; // Incluyendo la introducción y la final

// Selección de elementos principales
const lessonModal = document.getElementById("lessonModal");
const modalClose = document.getElementById("modalClose");
const startLesson = document.getElementById("startLesson");
const finishLesson = document.getElementById("finishLesson");
const prevChord = document.getElementById("prevChord");
const nextChord = document.getElementById("nextChord");

const introSlide = document.getElementById("introSlide");
const chordSlide = document.getElementById("chordSlide");
const finalSlide = document.getElementById("finalSlide");

const chordName = document.getElementById("chordName");
const chordImage = document.getElementById("chordImage");
const playSound = document.getElementById("playSound");
const chordDescription = document.getElementById("chordDescription");
const fingerPosition = document.getElementById("fingerPosition");
const adviceText = document.getElementById("adviceText"); // Para los consejos motivadores

// Datos de las lecciones
const mayores1 = [
  {
    name: "Do Mayor",
    image: "Acordes/Basico/Mayores/DoMayor.png",
    sound: "Acordes/Basico/Mayores/DoMayor.mp3",
    description: "El acorde Do Mayor se toca presionando las cuerdas...",
    fingerPosition: "Acordes/Basico/Mayores/DDoMay.png",
  },
  {
    name: "Re Mayor",
    image: "Acordes/Basico/Mayores/ReMayor.png",
    sound: "Acordes/Basico/Mayores/ReMayor.mp3",
    description: "El acorde Re Mayor se forma colocando los dedos...",
    fingerPosition: "Acordes/Basico/Mayores/DReMay.png",
  },
  {
    name: "Mi Mayor",
    image: "Acordes/Basico/Mayores/MiMayor.png",
    sound: "Acordes/Basico/Mayores/MiMayor.mp3",
    description: "El acorde Mi Mayor se toca presionando las cuerdas de forma abierta...",
    fingerPosition: "Acordes/Basico/Mayores/DMiMay.png",
  },
  {
    name: "La Mayor",
    image: "Acordes/Basico/Mayores/LaMayor.png",
    sound: "Acordes/Basico/Mayores/LaMayor.mp3",
    description: "El acorde La Mayor se forma colocando los dedos en las cuerdas adecuadas...",
    fingerPosition: "Acordes/Basico/Mayores/DLaMay.png",
  },
];
const mayores2 = [
  {
    name: "Sol Mayor",
    image: "Acordes/Basico/Mayores/SolMayor.png",
    sound: "Acordes/Basico/Mayores/SolMayor.mp3",
    description: "El acorde Sol Mayor se toca colocando los dedos en las cuerdas de forma precisa...",
    fingerPosition: "Acordes/Basico/Mayores/DSolMay.png",
  },
  {
    name: "Si Mayor",
    image: "Acordes/Basico/Mayores/SiMayor.png",
    sound: "Acordes/Basico/Mayores/SiMayor.mp3",
    description: "El acorde Si Mayor requiere barrer las cuerdas con un dedo y presionar de manera uniforme...",
    fingerPosition: "Acordes/Basico/Mayores/DSiMay.png",
  },
  {
    name: "Fa Mayor",
    image: "Acordes/Basico/Mayores/FaMayor.png",
    sound: "Acordes/Basico/Mayores/FaMayor.mp3",
    description: "El acorde Fa Mayor es un acorde de cejilla que desarrolla fuerza y precisión en la mano...",
    fingerPosition: "Acordes/Basico/Mayores/DFaMay.png",
  },
];

// Datos para "Acordes Menores Parte 1"
const menores1 = [
    {
      name: "Do menor",
      image: "Acordes/Basico/Menores/DoMenor.png",
      sound: "Acordes/Basico/Menores/DoMenor.mp3",
      description: "El acorde Do menor se toca presionando las cuerdas 1, 3 y 5...",
      fingerPosition: "Acordes/Basico/Menores/DDoMen.png",
    },
    {
      name: "Re menor",
      image: "Acordes/Basico/Menores/ReMenor.png",
      sound: "Acordes/Basico/Menores/ReMenor.mp3",
      description: "El acorde Re menor requiere tocar las cuerdas 2, 4 y 5...",
      fingerPosition: "Acordes/Basico/Menores/DReMen.png",
    },
    {
      name: "Mi menor",
      image: "Acordes/Basico/Menores/MiMenor.png",
      sound: "Acordes/Basico/Menores/MiMenor.mp3",
      description: "El acorde Mi menor es uno de los más básicos. Presiona las cuerdas 1 y 5...",
      fingerPosition: "Acordes/Basico/Menores/DMiMen.png",
    },
    {
      name: "La menor",
      image: "Acordes/Basico/Menores/LaMenor.png",
      sound: "Acordes/Basico/Menores/LaMenor.mp3",
      description: "El acorde La menor es ideal para principiantes. Enfócate en las cuerdas 2, 3 y 4...",
      fingerPosition: "Acordes/Basico/Menores/DLaMen.png",
    },
  ];
  // Datos para "Acordes Menores Parte 2"
  const menores2 = [
    {
      name: "Sol menor",
      image: "Acordes/Basico/Menores/SolMenor.png",
      sound: "Acordes/Basico/Menores/SolMenor.mp3",
      description: "El acorde Sol menor tiene una posición de cejilla. Practica lentamente...",
      fingerPosition: "Acordes/Basico/Menores/DSolMen.png",
    },
    {
      name: "Si menor",
      image: "Acordes/Basico/Menores/SiMenor.png",
      sound: "Acordes/Basico/Menores/SiMenor.mp3",
      description: "Para tocar Si menor, asegúrate de colocar bien el dedo índice en la cejilla...",
      fingerPosition: "Acordes/Basico/Menores/DSiMen.png",
    },
    {
      name: "Fa menor",
      image: "Acordes/Basico/Menores/FaMenor.png",
      sound: "Acordes/Basico/Menores/FaMenor.mp3",
      description: "El acorde Fa menor es desafiante, pero esencial. Practica con precisión...",
      fingerPosition: "Acordes/Basico/Menores/DFaMen.png",
    },
  ];

  // Datos para "Acordes de 7 Parte 1"
const acordes71 = [
    {
      name: "Do7",
      image: "Acordes/Basico/7/Do7.png",
      sound: "Acordes/Basico/7/Do7.mp3",
      description: "El acorde Do7 tiene un sonido característico que da un toque especial a cualquier pieza.",
      fingerPosition: "Acordes/Basico/7/DDo7.png",
    },
    {
      name: "Re7",
      image: "Acordes/Basico/7/Re7.png",
      sound: "Acordes/Basico/7/Re7.mp3",
      description: "El acorde Re7 añade un matiz dulce y armonioso, ideal para transiciones suaves.",
      fingerPosition: "Acordes/Basico/7/DRe7.png",
    },
    {
      name: "Mi7",
      image: "Acordes/Basico/7/Mi7.png",
      sound: "Acordes/Basico/7/Mi7.mp3",
      description: "El acorde Mi7 es esencial en muchos géneros musicales por su versatilidad.",
      fingerPosition: "Acordes/Basico/7/DMi7.png",
    },
    {
      name: "La7",
      image: "Acordes/Basico/7/La7.png",
      sound: "Acordes/Basico/7/La7.mp3",
      description: "El acorde La7 proporciona un sonido cálido y atractivo, perfecto para cierres emocionales.",
      fingerPosition: "Acordes/Basico/7/DLa7.png",
    },
  ];
  // Datos para "Acordes de 7 Parte 2"
  const acordes72 = [
    {
      name: "Sol7",
      image: "Acordes/Basico/7/Sol7.png",
      sound: "Acordes/Basico/7/Sol7.mp3",
      description: "El acorde Sol7 crea una tensión armoniosa, ideal para resolver en acordes mayores.",
      fingerPosition: "Acordes/Basico/7/DSol7.png",
    },
    {
      name: "Si7",
      image: "Acordes/Basico/7/Si7.png",
      sound: "Acordes/Basico/7/Si7.mp3",
      description: "El acorde Si7 da un toque vibrante y único, usado frecuentemente en jazz y blues.",
      fingerPosition: "Acordes/Basico/7/DSi7.png",
    },
    {
      name: "Fa7",
      image: "Acordes/Basico/7/Fa7.png",
      sound: "Acordes/Basico/7/Fa7.mp3",
      description: "El acorde Fa7 agrega profundidad y contraste a progresiones complejas.",
      fingerPosition: "Acordes/Basico/7/DFa7.png",
    },
  ];

// Consejos motivadores
const adviceArray = [
    "Recuerda: ¡El aprendizaje es un viaje, no un destino! Dedica tiempo y disfruta cada acorde. 🌟",
    "La paciencia y la práctica son tus mejores aliados para dominar cualquier acorde. 🎸",
    "Pequeños pasos llevan a grandes logros. ¡Avanza con confianza! 💪",
    "¡La música conecta el alma! Dedica cada acorde a algo especial. ✨",
    "Cada día que practicas, estás un paso más cerca de tu objetivo. ¡Sigue así! 🏆",
    "No tengas miedo de cometer errores, ¡ellos son tus mejores maestros! 📚",
    "¡Tómate tu tiempo! La velocidad llegará con la constancia. 🕰️",
    "Cuando tocas, no solo creas música, sino también recuerdos. 🎶✨",
    "Las cuerdas pueden doler al principio, pero tus manos se harán más fuertes con cada práctica. 💪🎸",
    "Concéntrate en disfrutar el proceso, no solo en el resultado final. 🌈",
    "Tu guitarra es tu voz. ¡Exprésate y deja fluir tu creatividad! 🎨🎸",
    "Aprender algo nuevo cada día hará que la música sea aún más emocionante. 🌟",
    "No subestimes el poder de una práctica corta, pero constante. ¡Cada minuto cuenta! ⏳",
    "La música tiene el poder de transformar el mundo. ¡Haz tu parte tocando con pasión! 🌍🎵",
    "¡Nunca te olvides de celebrar tus pequeños logros! Cada acorde aprendido es una victoria. 🥳🎸"
  ];

  let currentAudio = null; // Variable global para manejar el sonido actual

  function showModal(event) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    const lessonType = event.target.getAttribute("data-modal");
    console.log("Botón presionado:", lessonType);
  
    if (lessonType === "mayores1") {
      chords = mayores1;
    } else if (lessonType === "mayores2") {
      chords = mayores2;
    } else if (lessonType === "menores1") {
      chords = menores1;
    } else if (lessonType === "menores2") {
      chords = menores2;
    } else if (lessonType === "acordes71") {
      chords = acordes71;
    } else if (lessonType === "acordes72") {
      chords = acordes72;
    } else {
      console.error("Lección no encontrada: ", lessonType);
      return;
    }
  
    currentChordIndex = 0;
    lessonModal.classList.remove("hidden");
    introSlide.style.display = "block";
    chordSlide.style.display = "none";
    finalSlide.style.display = "none";
  
    const lessonNameText =
      lessonType === "mayores1"
        ? "Lección: Acordes Mayores Parte 1"
        : lessonType === "mayores2"
        ? "Lección: Acordes Mayores Parte 2"
        : lessonType === "menores1"
        ? "Lección: Acordes Menores Parte 1"
        : lessonType === "menores2"
        ? "Lección: Acordes Menores Parte 2"
        : lessonType === "acordes71"
        ? "Lección: Acordes de Séptima Parte 1"
        : "Lección: Acordes de Séptima Parte 2";
  
    const lessonBriefText =
      lessonType === "mayores1"
        ? "Aprende los acordes mayores básicos: Do, Re, Mi, La."
        : lessonType === "mayores2"
        ? "Continúa con los acordes mayores avanzados: Sol, Si, Fa."
        : lessonType === "menores1"
        ? "Descubre cómo tocar acordes menores con facilidad: Do, Re, Mi, La."
        : lessonType === "menores2"
        ? "Avanza con más acordes menores: Sol, Si, Fa."
        : lessonType === "acordes71"
        ? "Explora los acordes de séptima y su sonido característico: Do, Re, Mi, La."
        : "Finaliza tu aprendizaje con los acordes de séptima restantes: Sol, Si, Fa.";
  
    document.getElementById("lessonName").textContent = lessonNameText;
    document.getElementById("lessonBrief").textContent = lessonBriefText;
  }
  // Función para actualizar el contenido del slide del acorde
  function updateChordSlide() {
    const currentChord = chords[currentChordIndex];
    chordName.textContent = currentChord.name;
    chordImage.src = currentChord.image;
    chordDescription.textContent = currentChord.description;
    fingerPosition.src = currentChord.fingerPosition;
  
    playSound.onclick = () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(currentChord.sound);
      currentAudio.play();
    };
  
    updateAdvice(); // Invoca la actualización del consejo aquí
  }
  // Función para actualizar el consejo motivador
function updateAdvice() {
    const randomIndex = Math.floor(Math.random() * adviceArray.length); // Generar un índice aleatorio
    adviceText.textContent = adviceArray[randomIndex]; // Mostrar el consejo correspondiente
  }
  // Función para iniciar la lección
  function startLessonHandler() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    introSlide.style.display = "none";
    chordSlide.style.display = "block";
    updateChordSlide(); // Esto también invoca `updateAdvice`
  }
  
  // Función para ir al acorde anterior
  function prevChordHandler() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    if (currentChordIndex > 0) {
      currentChordIndex--;
      updateChordSlide(); // Esto incluye la actualización del consejo
    } else {
      chordSlide.style.display = "none";
      introSlide.style.display = "block";
    }
  }
  
  function nextChordHandler() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    if (currentChordIndex < chords.length - 1) {
      currentChordIndex++;
      updateChordSlide(); // Esto incluye la actualización del consejo
    } else {
      chordSlide.style.display = "none";
      finalSlide.style.display = "block";
    }
  }

  
  // Función para finalizar la lección
  function finishLessonHandler() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Verificar si estamos en la última lección (Acordes 7 Parte 2)
    const currentLesson = document.getElementById("lessonName").textContent;
    if (currentLesson === "Lección: Acordes de Séptima Parte 2") {
        // Marcar la lección básica como completada
        marcarLeccionCompletada('nivelBasico');
        // Mostrar mensaje de felicitación
        alert("¡Felicitaciones! Has completado todas las lecciones básicas. Ahora puedes acceder a las lecciones intermedias.");
        // Redirigir a la página de lecciones
        window.location.href = 'lecciones.html';
    }
    closeModal();
  }
  
  // Función para cerrar el modal
  function closeModal() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    lessonModal.classList.add("hidden");
  }
  
  // Asignar eventos al DOM
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-2").forEach((button) => {
      button.addEventListener("click", showModal);
    });
  
    modalClose.addEventListener("click", closeModal);
    startLesson.addEventListener("click", startLessonHandler);
    prevChord.addEventListener("click", prevChordHandler);
    nextChord.addEventListener("click", nextChordHandler);
    finishLesson.addEventListener("click", finishLessonHandler);
  });

// Función para mostrar la siguiente diapositiva
function mostrarSiguiente() {
    if (currentSlide < totalSlides) {
        document.querySelector(`#diapositiva-${currentSlide}`).style.display = 'none';
        currentSlide++;
        if (currentSlide === totalSlides) {
            document.getElementById('diapositiva-final').style.display = 'block';
            // Lanzar confeti cuando se llega a la última diapositiva
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            document.querySelector(`#diapositiva-${currentSlide}`).style.display = 'block';
        }
        actualizarBarraProgreso();
    }
}

// Función para mostrar la diapositiva anterior
function mostrarAnterior() {
    if (currentSlide > 1) {
        if (currentSlide === totalSlides) {
            document.getElementById('diapositiva-final').style.display = 'none';
        } else {
            document.querySelector(`#diapositiva-${currentSlide}`).style.display = 'none';
        }
        currentSlide--;
        document.querySelector(`#diapositiva-${currentSlide}`).style.display = 'block';
        actualizarBarraProgreso();
    }
}

// Función para actualizar la barra de progreso
function actualizarBarraProgreso() {
    const progress = (currentSlide / totalSlides) * 100;
    document.querySelector('.indicador').style.width = `${progress}%`;
}

// Funciones para los modales
function abrirModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Ocultar todas las diapositivas excepto la primera
    for (let i = 2; i <= totalSlides; i++) {
        if (i === totalSlides) {
            document.getElementById('diapositiva-final').style.display = 'none';
        } else {
            document.querySelector(`#diapositiva-${i}`).style.display = 'none';
        }
    }
    
    // Inicializar la barra de progreso
    actualizarBarraProgreso();

    // Agregar eventos a los botones de los modales
    document.querySelectorAll('.acorde, .tecnica').forEach(element => {
        element.addEventListener('click', function() {
            const modalId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            abrirModal(modalId);
        });
    });
});