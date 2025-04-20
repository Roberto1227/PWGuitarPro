// Variables globales
let chords = []; // Será asignada dinámicamente según la lección seleccionada
let currentChordIndex = 0; // Índice del acorde actual

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
    image: "ruta/a/imagen-re.jpg",
    sound: "ruta/a/sonido-re.mp3",
    description: "El acorde Re Mayor se forma colocando los dedos...",
    fingerPosition: "ruta/a/imagen-posicion-re.jpg",
  },
  {
    name: "Mi Mayor",
    image: "ruta/a/imagen-mi.jpg",
    sound: "ruta/a/sonido-mi.mp3",
    description: "El acorde Mi Mayor se toca presionando las cuerdas de forma abierta...",
    fingerPosition: "ruta/a/imagen-posicion-mi.jpg",
  },
  {
    name: "La Mayor",
    image: "ruta/a/imagen-la.jpg",
    sound: "ruta/a/sonido-la.mp3",
    description: "El acorde La Mayor se forma colocando los dedos en las cuerdas adecuadas...",
    fingerPosition: "ruta/a/imagen-posicion-la.jpg",
  },
];
const mayores2 = [
  {
    name: "Sol Mayor",
    image: "ruta/a/imagen-sol.jpg",
    sound: "ruta/a/sonido-sol.mp3",
    description: "El acorde Sol Mayor se toca colocando los dedos en las cuerdas de forma precisa...",
    fingerPosition: "ruta/a/imagen-posicion-sol.jpg",
  },
  {
    name: "Si Mayor",
    image: "ruta/a/imagen-si.jpg",
    sound: "ruta/a/sonido-si.mp3",
    description: "El acorde Si Mayor requiere barrer las cuerdas con un dedo y presionar de manera uniforme...",
    fingerPosition: "ruta/a/imagen-posicion-si.jpg",
  },
  {
    name: "Fa Mayor",
    image: "ruta/a/imagen-fa.jpg",
    sound: "ruta/a/sonido-fa.mp3",
    description: "El acorde Fa Mayor es un acorde de cejilla que desarrolla fuerza y precisión en la mano...",
    fingerPosition: "ruta/a/imagen-posicion-fa.jpg",
  },
];

// Consejos motivadores
const adviceArray = [
  "Recuerda: ¡El aprendizaje es un viaje, no un destino! Dedica tiempo y disfruta cada acorde. 🌟",
  "La paciencia y la práctica son tus mejores aliados para dominar cualquier acorde. 🎸",
  "Pequeños pasos llevan a grandes logros. ¡Avanza con confianza! 💪",
  "¡La música conecta el alma! Dedica cada acorde a algo especial. ✨",
];

function showModal(event) {
    const lessonType = event.target.getAttribute("data-modal");
    console.log("Botón presionado:", lessonType);
  
    if (lessonType === "mayores1") {
      chords = mayores1;
    } else if (lessonType === "mayores2") {
      chords = mayores2;
    } else {
      console.error("Lección no encontrada: ", lessonType);
      return;
    }
  
    // Configuración del modal
    currentChordIndex = 0;
    lessonModal.classList.remove("hidden");
    introSlide.style.display = "block";
    chordSlide.style.display = "none";
    finalSlide.style.display = "none";
  
    const lessonNameText = lessonType === "mayores1" ? "Lección: Acordes Mayores Parte 1" : "Lección: Acordes Mayores Parte 2";
    const lessonBriefText = lessonType === "mayores1" ? "Aprende los acordes mayores básicos: Do, Re, Mi, La." : "Continúa con los acordes mayores avanzados: Sol, Si, Fa.";
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

  // Reproducir sonido del acorde
  playSound.onclick = () => {
    const audio = new Audio(currentChord.sound);
    audio.play();
  };

  // Actualizar el consejo motivador
  updateAdvice();
}

function startLessonHandler() {
    introSlide.style.display = "none"; // Oculta la diapositiva introductoria
    chordSlide.style.display = "block"; // Muestra la diapositiva de los acordes
    updateChordSlide(); // Actualiza el contenido del primer acorde
  }

// Función para actualizar el consejo motivador
function updateAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceArray.length);
  adviceText.textContent = adviceArray[randomIndex];
}

// Función para ir al acorde anterior
function prevChordHandler() {
  if (currentChordIndex > 0) {
    currentChordIndex--;
    updateChordSlide();
  } else {
    chordSlide.style.display = "none";
    introSlide.style.display = "block";
  }
}

// Función para ir al siguiente acorde
function nextChordHandler() {
  if (currentChordIndex < chords.length - 1) {
    currentChordIndex++;
    updateChordSlide();
  } else {
    chordSlide.style.display = "none";
    finalSlide.style.display = "block";
  }
}

// Función para finalizar la lección
function finishLessonHandler() {
  closeModal();
}

// Función para cerrar el modal
function closeModal() {
  lessonModal.classList.add("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
    // Asignar eventos a los botones "Aprender"
    document.querySelectorAll(".btn-2").forEach((button) => {
      button.addEventListener("click", showModal);
    });
  
    // Otros eventos de clic
    modalClose.addEventListener("click", closeModal);
    startLesson.addEventListener("click", startLessonHandler);
    prevChord.addEventListener("click", prevChordHandler);
    nextChord.addEventListener("click", nextChordHandler);
    finishLesson.addEventListener("click", finishLessonHandler);
  });